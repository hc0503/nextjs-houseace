interface Props {
	id?: string;
	className?: string;
	type?: "text" | "email" | "password" | "number" | "checkbox";
	onChange?: any;
}
const CheckboxInput: React.FC<Props> = ({
	id,
	className = "",
	type = "checkbox",
	onChange,
}): JSX.Element => {
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
};

export default CheckboxInput;
