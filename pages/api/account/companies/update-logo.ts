import { NextApiResponse } from "next";
import nc from "next-connect";
import { User } from ".prisma/client";
import formidable from "formidable";
import fs from "fs";
import randomstring from "randomstring";

import prisma from "@/lib/prisma";
import { sessionMiddleware } from "@/lib/iron-session";
import { Company } from "@prisma/client";

export const config = {
	api: {
		bodyParser: false,
	},
};

export default nc()
	.use(sessionMiddleware)
	// Update company logo
	.post(async (req: any, res: NextApiResponse) => {
		const sessionUser: User = req.session.get("user");
		const company: Company = await prisma.company.findFirst({
			where: {
				userId: Number(sessionUser.id),
			},
		});
		const form = new formidable.IncomingForm();
		form.parse(req, async function (err, fields, files) {
			const imagePath = await saveAndDelete(
				files.file,
				company?.logoImage
			);
			try {
				const user = await prisma.user.update({
					where: {
						id: 1,
					},
					data: {
						company: {
							phone: "SSSSSSSSSS",
						},
					},
				});
			} catch (e) {
				console.log(e);
				return res.status(403).json({
					msg: "The database connection error.",
				});
			}
			return res.json({
				msg: "The logo is updated successfully.",
				data: company,
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
	const imagePath = `/upload/account/company/logo/${fileName}`;
	fs.writeFileSync(`./public${imagePath}`, data);
	await fs.unlinkSync(file.path);
	if (fs.existsSync(`./public${oldFilePath}`))
		await fs.unlinkSync(`./public${oldFilePath}`);

	return imagePath;
};
