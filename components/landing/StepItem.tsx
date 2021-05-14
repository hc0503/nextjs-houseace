import classNames from "classnames";
import React from "react";
interface Props {
	item: iLandingStepType;
	className?: string;
}
function StepItem({ className, item }: Props): JSX.Element {
	return (
		<div
			className={classNames(
				"flex items-center h-16 sm:h-24",
				className,
				{
					"bg-red-lesslight": item.status === true,
				}
			)}
		>
			<span className="inline-flex items-center px-2 sm:px-4 w-8 sm:w-14 h-6 sm:h-10 bg-red text-white font-bold rounded-r-full">
				{item.index}
			</span>
			<item.icon className="h-8 sm:h-14 w-12 ml-2 sm:ml-7 rounded-full" />
			<p className="text-black font-bold ml-0 sm:ml-4 text-base sm:text-xl">
				{item.title}
			</p>
		</div>
	);
}

export default StepItem;
