import { FiArrowRight } from "react-icons/fi";
import classNames from "classnames";

interface Props {
	type?: "submit" | "button";
	disabled?: boolean;
	children?: React.ReactNode;
	arrowSize?: string;
	fontsize?: string;
	padding?: string;
	itemPadding?: string;
	buttonSize?: string;
}
const ArrowCircleButton: React.FC<Props> = ({
	type = "button",
	disabled = false,
	children,
	arrowSize = "h-4 w-4",
	fontsize = "text-sm",
	itemPadding = "pr-2",
	buttonSize = "w-14 h-14 hover:w-32",
}): JSX.Element => {
	return (
		<>
			<button
				type={type}
				className={classNames(
					"group inline-flex justify-center items-center border border-white border-transparent rounded-full text-white bg-red hover:bg-red-dark focus:outline-none hover:border-red-dark transition-width duration-500 ease-in-out",
					{ "opacity-50 cursor-not-allowed": disabled },
					buttonSize
				)}
				disabled={disabled}
			>
				<p
					className={classNames(
						fontsize,
						"group-hover:block hidden whitespace-nowrap overflow-hidden",
						itemPadding
					)}
				>
					{children}
				</p>
				<FiArrowRight
					className={classNames(arrowSize)}
					aria-hidden="true"
				/>
			</button>
		</>
	);
};

export default ArrowCircleButton;
