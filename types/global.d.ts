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
	onClick?: () => void;
}
