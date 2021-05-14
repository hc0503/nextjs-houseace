import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
	id: number;
	firstname: string;
	lastname: string;
	password: string;
	photo: string;
	created_at: string;
	updated_at: string;
}
export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
	if (req.method === "POST") {
		res.status(200).json({
			id: 1,
			firstname: "Meng",
			lastname: "Lang",
			password: "password",
			photo: "",
			created_at: "2021-05-12",
			updated_at: "2021-05-12",
		});
	}
};
