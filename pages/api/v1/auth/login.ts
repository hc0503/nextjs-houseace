export default async (req: any, res: any) => {
	if (req.method === 'POST') {
		res.status(200).json({
			id: 1,
			firstname: 'Meng',
			lastname: 'Lang',
			password: 'password',
			photo: '',
			created_at: '2021-05-12',
			updated_at: '2021-05-12'
		});
	}
}
