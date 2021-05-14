interface iInputProps {
	className?: string;
	type?: "text" | "email" | "password" | "number" | "checkbox";
	id?: string;
	placeholder?: string;
	autoFocus?: boolean;
	autoComplete?: "off" | "on";
	onChange?: any;
}
interface iLabelProps {
	className?: string;
	children?: ReactNode;
	htmlFor?: string;
}
interface iButtonProps {
	className?: string;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	children?: ReactNode;
	onClick?: any;
}
interface iHrefLinkProps {
	className?: string;
	children?: ReactNode;
	href?: string;
}
interface iImgProps {
	className?: string;
	alt?: string;
	src?: string;
}
interface iLandingStepType {
	status: boolean;
	index: number;
	icon: string;
	title: string;
}
declare module "*.svg" {
	import { ReactElement, SVGProps } from "react";
	const content: (props: SVGProps<SVGElement>) => ReactElement;
	export default content;
}
