import connection from "../database/connection";

export default {
	async store(req, res) {
		const { id } = req.body;
		const ong = await connection("ongs")
			.where("id", id)
			.select("name")
			.first();

		if (!ong) {
			return res.status(400).json({
				error: "ONG not found!",
			});
		}
		return res.json(ong);
	},
};
