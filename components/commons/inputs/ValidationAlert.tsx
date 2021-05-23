import classNames from "classnames";

interface Props {
	id?: string;
	className?: string;
	children?: React.ReactNode;
}
const ValidationAlert: React.FC<Props> = ({
	id,
	className = "",
	children = "",
}): JSX.Element => {
	return (
		<p
			className={classNames(
				"text-sm text-red-moredark font-medium",
				className
			)}
			id={id}
		>
			{children}
		</p>
	);
};

export default ValidationAlert;
