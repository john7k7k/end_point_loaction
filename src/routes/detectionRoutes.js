import express from "express";
import * as controller from "../controllers/detectionController.js";

const router = express.Router();

router.post("/", controller.createDetection);
router.get("/:operationId", controller.getOperationDetections);
router.patch("/:id", controller.updateDetection);
router.delete("/:id", controller.deleteDetection);
export default router;
