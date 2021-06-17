import { NextApiResponse } from "next";
import nc from "next-connect";
import { User } from ".prisma/client";
import formidable from "formidable";
import fs from "fs";
import randomstring from "randomstring";

import prisma from "@/lib/prisma";
import { sessionMiddleware } from "@/lib/iron-session";

export const config = {
	api: {
		bodyParser: false,
	},
};

export default nc()
	.use(sessionMiddleware)
	// Update profile photo
	.post(async (req: any, res: NextApiResponse) => {
		const sessionUser: User = req.session.get("user");
		let user: User = await prisma.user.findUnique({
			where: {
				id: Number(sessionUser.id),
			},
		});
		const form = new formidable.IncomingForm();
		form.parse(req, async function (err, fields, files) {
			const imagePath = await saveAndDelete(files.file, user.image);
			user = await prisma.user.update({
				where: {
					id: Number(sessionUser.id),
				},
				data: {
					image: imagePath,
				},
			});
			return res.json({
				msg: "The avatar is updated successfully.",
				data: user,
			});
		});
	});

const saveAndDelete = async (
	file,
	oldFilePath: string
): Promise<string> => {
	const regex = /[^.]*/;
	const data = fs.readFileSync(file.path);
	const fileName = file.name.replace(regex, randomstring.generate());
	const imagePath = `/upload/account/profile/${fileName}`;
	if (!fs.existsSync(`./public/upload/account/profile`)) {
		fs.mkdirSync(`./public/upload/account/profile`);
	}
	fs.writeFileSync(`./public${imagePath}`, data);
	await fs.unlinkSync(file.path);
	if (fs.existsSync(`./public${oldFilePath}`))
		await fs.unlinkSync(`./public${oldFilePath}`);

	return imagePath;
};
