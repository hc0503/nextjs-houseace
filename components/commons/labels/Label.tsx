interface Props {
	className?: string;
	children?: React.ReactNode;
	htmlFor?: string;
}
const Label: React.FC<Props> = ({
	htmlFor,
	className = "",
	children = "Label",
}) => {
	return (
		<label
			className={`
				text-gray
				${className}
			`}
			htmlFor={htmlFor}
		>
			{children}
		</label>
	);
};

export default Label;
