interface IRole {
	id: number;
	name: string;
	createdAt: Date;
	updatedAt: Date;
}
interface IUser {
	id: number;
	firstname: string;
	lastname: string;
	photo?: string;
	password: string;
}
