
const Button = (props: iButtonProps) => {
	const {
		children = 'Button',
		disabled = false,
		className = '',
		type = 'button',
		onClick
	} = props;

	return (
		<button
			className={`
				border
				border-transparent
				rounded
				focus:outline-none
				focus:ring-1
				focus:ring-red-dark
				shadow-sm
				bg-red
				px-3
				py-3
				text-white
				w-full
				text-lg
				font-medium
				${disabled ? 'opacity-80 cursor-not-allowed' : 'hover:bg-red-dark'}
				${className}
			`}
			disabled={disabled}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
