
const Label = (props: iLabelProps) => {
	const {
		htmlFor = null,
		className = '',
		children = 'Label'
	} = props;
	
	return (
		<label
			className={`
				text-gray-500
				${className}
			`}
			htmlFor={htmlFor}
		>
			{children}
		</label>
	);
}

export default Label;
