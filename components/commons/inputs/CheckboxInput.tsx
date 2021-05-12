
const CheckboxInput = (props: iInputProps) => {
	const {
		id = null,
		className = '',
		type = 'checkbox',
	} = props;

	return (
		<input
			className={`
				min-h-4
				min-w-4
				text-red-400
				rounded
				checked:bg-red-400
				checked:border-transparent
				${className}
			`}
			id={id}
			type={type}
		/>
	);
}

export default CheckboxInput;
