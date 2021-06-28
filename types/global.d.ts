declare module "react-faq-component";
declare module "formidable";
declare module "randomstring";
interface IReponse {
	error: string | undefined;
	status: number;
	ok: boolean;
	data: any;
}
interface IInput {
	id: string;
	name: string;
	type?: "email" | "text" | "number" | "password" | "file";
	autoComplete?: "on" | "off";
	required?: boolean;
	placeHolder?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
interface IButton {
	children: React.ReactNode;
	fontSize?: string;
	fontWeight?: string;
	textColor?: string;
	bgColor?: string;
	borderColor?: string;
	hoverBgColor?: string;
	hoverTextColor?: string;
	padding?: string;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	onClick?: () => void;
}
