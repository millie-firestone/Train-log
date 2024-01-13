import {
	getUserTrainLogs,
} from "../Controllers/TrainController";
import express from "express";

const router = express.Router();

// Define routes here and link them to your controllers with .get(), .post(), .delete(), etc.
router.route("/userId/").get(getUserTrainLogs);

export default router;