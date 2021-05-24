import { NextApiResponse } from "next";
import nc from "next-connect";

import { sessionMiddleware } from "@/lib/iron-session";

export default nc()
	.use(sessionMiddleware)
	.get(async (req: any, res: NextApiResponse) => {
		req.session.destroy();
		return res.send({
			msg: "Logged out successfully.",
		});
	});
