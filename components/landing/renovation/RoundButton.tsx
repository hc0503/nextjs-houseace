import classNames from "classnames";

const RoundButton: React.FC<IButton> = ({
	children,
	padding = "px-14 py-4",
	fontSize = "text-base",
	textColor = "text-black",
	bgColor = "bg-white",
	borderColor = "",
	hoverBgColor = "hover:bg-red",
	fontWeight = "font-normal",
}): JSX.Element => {
	return (
		<button
			className={classNames(
				"rounded-full border focus:outline-none transition duration-500 ease-in-out transform hover:scale-100",
				padding,
				fontSize,
				textColor,
				bgColor,
				borderColor,
				fontWeight,
				hoverBgColor
			)}
		>
			{children}
		</button>
	);
};

export default RoundButton;
