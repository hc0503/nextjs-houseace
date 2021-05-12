interface iUser {
	id: number,
	firstname: string,
	lastname: string,
	photo?: string,
	password: string,
}
interface iUserState {
	data: iUser,
	loading: boolean,
}