import { FiArrowRight } from "react-icons/fi";
import classNames from "classnames";
import { useState } from "react";

interface Props {
	type?: "submit" | "button";
	className?: string;
	disabled?: boolean;
	children?: React.ReactNode;
}
const SubmitButton: React.FC<Props> = ({
	type = "button",
	className = "",
	disabled = false,
	children,
}): JSX.Element => {
	const [hovered, setHovered] = useState(false);
	return (
		<>
			<button
				type={type}
				className={classNames(
					"inline-flex items-center p-2 border border-white border-transparent rounded-full text-white bg-red hover:bg-red-dark hover:border-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-moredark",
					{ "opacity-50 cursor-not-allowed": disabled },
					className
				)}
				disabled={disabled}
				onMouseOver={() => setHovered(true)}
				onFocus={() => void 0}
				onMouseLeave={() => setHovered(false)}
			>
				{hovered && <p className="px-8">{children}</p>}
				<FiArrowRight className="h-6 w-6" aria-hidden="true" />
			</button>
		</>
	);
};

export default SubmitButton;
