import { NextApiRequest, NextApiResponse } from "next";
import Prisma from "@/lib/prisma";

interface ITest {
	id: number;
	email: string;
	name: string;
}
interface IResponseData {
	data: ITest[];
}
const hello = async (
	_: NextApiRequest,
	res: NextApiResponse<IResponseData>
): Promise<void> => {
	const tests: ITest[] = await Prisma.test.findMany();
	res.status(200).json({ data: tests });
};

export default hello;
