import classNames from "classnames";

const RoundButton: React.FC<IButton> = ({
	children,
	padding = "px-14 py-4",
	fontSize = "text-base",
	textColor = "text-black hover:text-black",
	bgColor = "bg-white hover:bg-red",
	borderColor,
}): JSX.Element => {
	return (
		<button
			className={classNames(
				"rounded-full border focus:outline-none transition duration-500 ease-in-out transform hover:scale-100",
				padding,
				fontSize,
				textColor,
				bgColor,
				borderColor
			)}
		>
			{children}
		</button>
	);
};

export default RoundButton;
