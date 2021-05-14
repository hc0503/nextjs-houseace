interface Props {
	className?: string;
	type?: "text" | "email" | "password" | "number" | "checkbox";
	id?: string;
	placeholder?: string;
	autoComplete?: "off" | "on";
	onChange?: any;
}

const TextInput: React.FC<Props> = ({
	className = "",
	type = "text",
	id,
	placeholder = "",
	autoComplete = "off",
	onChange,
}): JSX.Element => {
	return (
		<input
			className={`
				w-full
				p-2
				border
				rounded-md
				outline-none
				text-sm
				transition
				duration-150
				ease-in-out mb-4
				focus:outline-none
				focus:ring-1
				focus:ring-red
				focus:border-transparent
				${className}
			`}
			type={type}
			placeholder={placeholder}
			id={id}
			autoComplete={autoComplete}
			onChange={onChange}
		/>
	);
};

export default TextInput;
