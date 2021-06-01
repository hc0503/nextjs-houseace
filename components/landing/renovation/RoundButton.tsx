import classNames from "classnames";

interface IProps extends IButton {
	padding?: string;
}

const RoundButton: React.FC<IProps> = ({
	children,
	padding = "px-14 py-4",
}): JSX.Element => {
	return (
		<button
			className={classNames(
				"rounded-full bg-white border hover:bg-red-lesslight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-light transition duration-500 ease-in-out transform hover:scale-100",
				padding
			)}
		>
			{children}
		</button>
	);
};

export default RoundButton;
