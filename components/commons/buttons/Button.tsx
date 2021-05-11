
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
				focus:ring-2
				focus:ring-offset-2
				focus:ring-red-500
				shadow-sm
				bg-red-400
				px-3
				py-3
				text-white
				w-full
				text-lg
				font-medium
				${disabled ? 'opacity-80 cursor-not-allowed' : 'hover:bg-red-500'}
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
