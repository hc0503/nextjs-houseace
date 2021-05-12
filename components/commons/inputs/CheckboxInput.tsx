
const CheckboxInput = (props: iInputProps) => {
	const {
		id = null,
		className = '',
		type = 'checkbox',
		onChange
	} = props;

	return (
		<input
			className={`
				min-h-4
				min-w-4
				text-red
				rounded
				checked:bg-red
				checked:border-transparent
				${className}
			`}
			id={id}
			type={type}
			onChange={onChange}
		/>
	);
}

export default CheckboxInput;
