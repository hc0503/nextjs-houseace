
const TextInput = (props: iInputProps) => {
	const {
		id = null,
		className = '',
		type = 'text',
		placeholder = ''
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
				focus:ring-2
				focus:ring-red-300
				focus:border-transparent
				${className}
			`}
			type={type}
			placeholder={placeholder}
			id={id}
		/>
	);
}

export default TextInput;
