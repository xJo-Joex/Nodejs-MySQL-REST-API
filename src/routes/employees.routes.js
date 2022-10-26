import { Router } from "express";
import {
	createEmployees,
	deleteEmployees,
	getEmployeeById,
	getEmployees,
	updateEmployees,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployeeById);
router.post("/employees", createEmployees);
router.put("/employees", updateEmployees);
router.delete("/employees/:id", deleteEmployees);

export default router;
