import { createPool } from "mysql2/promise";
import { HOST,DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } from "./config.js";
export const pool = createPool({
	host: HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	port: DB_PORT,
	database: DB_NAME,
});

