import { FiArrowRight } from "react-icons/fi";
import classNames from "classnames";
import { useState } from "react";

interface Props {
	type?: "submit" | "button";
	disabled?: boolean;
	children?: React.ReactNode;
	arrowSize?: string;
	fontsize?: string;
	padding?: string;
}
const ArrowCircleButton: React.FC<Props> = ({
	type = "button",
	disabled = false,
	children,
	arrowSize = "h-8 w-8",
	fontsize,
	padding = "px-5",
}): JSX.Element => {
	const [hovered, setHovered] = useState(false);
	return (
		<>
			<button
				type={type}
				className={classNames(
					"inline-flex justify-center items-center p-2 border border-white border-transparent rounded-full text-white bg-red hover:bg-red-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-moredark hover:border-red-moredark transition duration-500 ease-in-out transform hover:scale-100",
					{ "opacity-50 cursor-not-allowed": disabled }
				)}
				disabled={disabled}
				onMouseOver={() => setHovered(true)}
				onFocus={() => void 0}
				onMouseLeave={() => setHovered(false)}
			>
				{hovered && (
					<p className={classNames(fontsize, padding)}>{children}</p>
				)}
				<FiArrowRight
					className={classNames(arrowSize)}
					aria-hidden="true"
				/>
			</button>
		</>
	);
};

export default ArrowCircleButton;
