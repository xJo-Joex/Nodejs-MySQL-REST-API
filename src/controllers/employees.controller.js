import { pool } from "../db.js";
export const getEmployees = async (req, res) => {
	try {
		const [rows] = await pool.query("SELECT * FROM employee");
		res.status(200).send(rows);
	} catch (error) {
		res.status(500).json({ message: " Something goes wrong" });
	}
};

export const getEmployeeById = async (req, res) => {
	try {
		const [rows] = await pool.query("SELECT * FROM employee WHERE id=?", [req.params.id]);
		if (rows.length <= 0) return res.status(404).json({ message: "Employee not found" });
		res.json(rows[0]);
	} catch (error) {
		res.status(500).json({ message: " Something goes wrong" });
	}
};
export const createEmployees = async (req, res) => {
	const { name, salary } = req.body;
	try {
		const [rows] = await pool.query("INSERT INTO employee (name, salary) VALUES(?,?)", [
			name,
			salary,
		]);
		res.status(201).send({
			id: rows.insertId,
			name,
			salary,
		});
	} catch (error) {
		res.status(500).json({ message: " Something goes wrong" });
	}
};
export const updateEmployees = async (req, res) => {
	const { name, salary } = req.body;
	try {
		const [result] = await pool.query(
			"UPDATE employee SET name=IFNULL(?, name), salary=IFNULL(?, salary) where id=?",
			[name, salary, req.params.id]
		);
		console.log(result);
		if (result.affectedRows <= 0) return res.status(404).json({ message: "Employee not found" });

		const [row] = await pool.query("SELECT * FROM employee where id=?", [req.params.id]);
		res.status(200).json(row[0]);
	} catch (error) {
		res.status(500).json({ message: " Something goes wrong" });
	}
};
export const deleteEmployees = async (req, res) => {
	try {
		const [rows] = await pool.query("DELETE FROM employee where id=?", [req.params.id]);

		if (rows.affectedRows === 0) return res.status(404).json({ message: "Employee not Found" });
		res.sendStatus(204);
	} catch (error) {
		res.status(500).json({ message: " Something goes wrong" });
	}
};
