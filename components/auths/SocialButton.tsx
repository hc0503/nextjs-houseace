
const Button = (props: iButtonProps) => {
	const {
		children = 'Button',
		disabled = false,
		className = '',
		type = 'button',
		onClick,
	} = props;

	return (
		<button
			className={`
				inline-flex
				items-center
				px-4
				py-2
				border
				border-red-300
				shadow-sm
				text-sm
				font-medium
				rounded-md
				text-gray-700
				bg-white
				hover:bg-gray-50
				focus:outline-none
				focus:ring-2
				focus:ring-red-500
				justify-center
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
