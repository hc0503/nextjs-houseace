declare module "react-faq-component";
interface iChildren {
	children: React.ReactNode;
}
interface IInputGroup {
	id?: string;
	name?: string;
	label?: string;
	type?: "email" | "text" | "number" | "password";
	autoComplete?: "on" | "off";
	required?: boolean;
	className?: string;
	placeholder?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
