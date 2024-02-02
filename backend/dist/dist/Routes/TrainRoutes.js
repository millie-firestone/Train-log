"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TrainController_1 = require("../Controllers/TrainController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Define routes here and link them to your controllers with .get(), .post(), .delete(), etc.
router.route("/userId/").get(TrainController_1.getUserTrainLogs);
exports.default = router;
