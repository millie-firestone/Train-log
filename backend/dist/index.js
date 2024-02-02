"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const dotenv = __importStar(require("dotenv"));
const TrainRoutes_1 = __importDefault(require("./Routes/TrainRoutes"));
const winston_1 = __importDefault(require("winston"));
// Initialize express server
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
// Express middleware configuration
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
dotenv.config();
// Routes
app.use("/api/trainlog", TrainRoutes_1.default);
// Configure Winston Logger
const logger = winston_1.default.createLogger({
    transports: [
        new winston_1.default.transports.File({ filename: 'error.log', level: 'error' }),
    ]
});
// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    // Log the error to a file
    logger.error(err.stack);
    res.status(500).send('The train got derailed!');
});
// Listen for api calls and serve webpage
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "client", "index.html"));
});
app.use(express_1.default.static(path_1.default.join(__dirname, "client")));
server.listen(1313, () => {
    console.log("Server listening on port: " + 1313);
});
