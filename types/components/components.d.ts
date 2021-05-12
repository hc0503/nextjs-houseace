
interface iInputProps {
	className?: string,
	type?: 'text' | 'email' | 'password' | 'number' | 'checkbox',
	id?: string,
	placeholder?: string,
	autoFocus?: boolean,
	autoComplete?: 'off' | 'on'
}
interface iLabelProps {
	className?: string,
	children?: ReactNode,
	htmlFor?: string
}
interface iButtonProps {
	className?: string,
	type?: 'button' | 'submit' | 'reset',
	disabled?: boolean,
	children?: ReactNode,
	onClick?: any
}
interface iHrefLinkProps {
	className?: string,
	children?: ReactNode,
	href?: string,
}
interface iLogoProps {
	className?: string,
	alt?: string,
	src?: string
}
