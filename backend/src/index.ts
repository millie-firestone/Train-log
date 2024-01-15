import express, {Request,Response, NextFunction} from "express";
import cors from "cors";
import path from "path";
import http from "http";
import * as dotenv from "dotenv";
import trainRoutes from "./Routes/TrainRoutes";
import winston from "winston";

// Initialize express server
const app = express();
const server = http.createServer(app);

// Express middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

// Routes
app.use("/api/trainlog", trainRoutes);

// Configure Winston Logger
const logger = winston.createLogger({
	transports: [
		new winston.transports.File({filename: 'error.log', level: 'error'}),
	]
});

// Error handler middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err.stack);

// Log the error to a file
	logger.error(err.stack);

	res.status(500).send('The train got derailed!');
});

// Listen for api calls and serve webpage
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "index.html"));
});
app.use(express.static(path.join(__dirname, "client")));

server.listen(1313, () => {
	console.log("Server listening on port: " + 1313);
});
