const Button = (props: iButtonProps) => {
	const { children = "Button", disabled = false, className = "", type = "button", onClick } = props;

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
				text-gray-dark
				bg-white
				hover:bg-red-lesslight
				focus:outline-none
				focus:ring-1
				focus:ring-red
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
};

export default Button;
