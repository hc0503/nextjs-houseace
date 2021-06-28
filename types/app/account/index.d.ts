interface IUploadItem {
	imageUrl: string;
}
interface IService {
	name: string;
}
interface IServices {
	services: IService[];
}
interface ITab {
	name: string;
	target: React.ReactNode<T>;
}
interface IProfileData {
	name: string;
	phone: string;
	address: string;
}
interface IProfilePhoto {
	image: string;
}
interface IProfileType {
	role: number;
}
interface IPassword {
	current_password: string;
	password: string;
	password_confirmation: string;
}
interface ICompanyData {
	businessName: string;
	phoneNumber: string;
	address: string;
	licenseNumber: string;
	yearFounded: string;
	abnNumber: string;
}
