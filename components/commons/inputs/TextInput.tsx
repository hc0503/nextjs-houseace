const TextInput = (props: iInputProps) => {
	const {
		id = null,
		className = "",
		type = "text",
		placeholder = "",
		autoComplete = "off",
		onChange,
	} = props;

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
