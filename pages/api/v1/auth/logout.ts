import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
	msg: string;
}
export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
	if (req.method === "POST") {
		res.status(200).json({
			msg: "Logout is success.",
		});
	}
};
