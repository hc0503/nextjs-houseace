export default async (req: any, res: any) => {
	if (req.method === 'POST') {
		res.status(200).json({
			msg: 'Logout is success.'
		});
	}
}
