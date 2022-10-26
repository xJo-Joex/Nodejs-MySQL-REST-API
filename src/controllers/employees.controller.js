import { pool } from "../db.js";
export const getEmployees = async (req, res) => {
	const [rows] = await pool.query("SELECT * FROM employee");
	res.status(200).send(rows);
};

export const getEmployeeById = async (req, res) => {
	const [rows] = await pool.query("SELECT * FROM employee WHERE id=?", [
		req.params.id,
	]);
	if (rows.length <= 0)
		return res.status(404).json({ message: "Employee not found" });
	res.json(rows[0]);
};
export const createEmployees = async (req, res) => {
	const { name, salary } = req.body;
	const [rows] = await pool.query(
		"INSERT INTO employee (name, salary) VALUES(?,?)",
		[name, salary]
	);
	res.status(201).send({
		id: rows.insertId,
		name,
		salary,
	});
};
export const updateEmployees = (req, res) => {
	res.send("Actualizando empleados");
};
export const deleteEmployees = async (req, res) => {
	const [rows] = await pool.query("DELETE FROM employee where id=?", [
		req.params.id,
	]);

	if (rows.affectedRows === 0)
		return res.status(404).json({ message: "Employee not Found" });
	res.sendStatus(204);
};
