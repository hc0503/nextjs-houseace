interface Props {
	children?: string;
	disabled?: boolean;
	className?: boolean;
	type?: "button" | "submit" | "reset";
	onClick?: any;
}
const Button: React.FC<Props> = ({
	children = "Button",
	disabled = false,
	className = "",
	type = "button",
	onClick,
}): JSX.Element => {
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
				${disabled ? "opacity-80 cursor-not-allowed" : "hover:bg-red-dark"}
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
