declare module "react-faq-component";
interface iChildren {
	children: React.ReactNode;
}
interface IInput {
	id: string;
	name: string;
	type?: "email" | "text" | "number" | "password";
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
interface INavigation {
	name: string;
	href: string;
	icon?: React.ReactNode;
	color?: string;
}
interface IGettingDoneItem {
	src: string;
	alt: string;
	title: string;
	location: string;
	userAvatar: string;
	userName: string;
	rate: number;
}
interface IIntroduceItem {
	src: string;
	alt: string;
	description: string;
}
interface IPopularItem {
	src: string;
	alt: string;
	title: string;
}
interface ITab {
	name: string;
	target: React.ReactNode<T>;
}
// Redux
interface IState {
	loading: boolean;
}
interface IService {
	name: string;
}
