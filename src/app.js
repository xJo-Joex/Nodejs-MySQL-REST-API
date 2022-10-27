import express from "express";
import { pool } from "./db.js";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import { PORT } from "./config.js";
const app = express();

app.use(express.json());
app.use(indexRoutes);
app.use("/api", employeesRoutes);

//endpoint notFound
app.use((req, res) => {
	res.status(404).json({ message: "Endpoint Not Found" });
});

export default app;