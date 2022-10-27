import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3001;
export const DB_NAME = process.env.DB_NAME || "companydb";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_PORT = process.env.DB_PORT || "3306";
export const HOST = process.env.HOST || "localhost";
console.log(process.env.DB_PASSWORD)