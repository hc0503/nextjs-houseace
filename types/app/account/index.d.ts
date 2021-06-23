interface IUploadItem {
	imageUrl: string;
}
interface IService {
	name: string;
}
interface ITab {
	name: string;
	target: React.ReactNode<T>;
}
interface IProfile {
	name: string;
	phone: string;
	address: string;
}
interface IProfilePhoto {
	image: string;
}
interface IPassword {
	current_password: string;
	password: string;
	password_confirmation: string;
}
interface IProfileType {
	role: number;
}
