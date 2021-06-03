import classNames from "classnames";

const RoundButton: React.FC<IButton> = ({
	children,
	padding = "px-14 py-4",
	fontSize = "md:text-base text-sm",
	textColor = "text-black",
	bgColor = "bg-white",
	borderColor = "",
	hoverBgColor = "hover:bg-red",
	hoverTextColor = "hover:text-black",
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
				hoverBgColor,
				hoverTextColor
			)}
		>
			{children}
		</button>
	);
};

export default RoundButton;
