interface IRole {
	id: string;
	name: string;
	createdAt: Date;
	updatedAt: Date;
}
interface IUser {
	id: string;
	name: string | null;
	email: string;
	roleId: number;
	password?: string | null;
	emailVerified: Date | null;
	phone: string | null;
	address: string | null;
	photo: string | null;
	providerType: ProviderType;
	createdAt: Date;
	updatedAt: Date;
}
interface ICompany {
	id: string;
	userId: string;
	heroImage: string;
	logoImage: string;
	businessName: string;
	phoneNumber: string;
	address: string;
	licenseNumber: string;
	yearFounded: string;
	abnNumber: string;
	createdAt: Date;
	updatedAt: Date;
}
