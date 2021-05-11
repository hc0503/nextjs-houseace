
interface iInputProps {
	className?: string,
	type?: 'text' | 'email' | 'password' | 'number',
	id?: string,
	placeholder?: string
}
interface iButtonProps {
	className?: string,
	type?: 'button' | 'submit' | 'reset',
	disabled?: boolean,
	children: ReactNode,
	onClick?: any
}
interface iHrefLinkProps {
	className?: string,
	children?: ReactNode,
	href?: string,
}
