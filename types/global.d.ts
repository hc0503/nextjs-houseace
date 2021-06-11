interface IInput {
	id: string;
	name: string;
	type?: "email" | "text" | "number" | "password" | "file";
	autoComplete?: "on" | "off";
	required?: boolean;
	placeHolder?: string;
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
