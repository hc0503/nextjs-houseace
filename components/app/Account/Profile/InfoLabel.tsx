import classNames from "classnames";
import React from "react";

import { handelFocus } from "../../../../lib/global-functions";

interface IProps extends IInput {
	label: string;
	icon: React.ReactNode;
	defaultValue: string;
	valueClass?: string;
	register?: any;
	errorMessage?: string;
}

const InfoLabel: React.FC<IProps> = ({
	label,
	icon,
	defaultValue,
	valueClass,
	disabled,
	id,
	name,
	type = "text",
	register,
	errorMessage,
}): JSX.Element => {
	return (
		<div className="w-full">
			<label htmlFor={id} className="block text-xs pl-7">
				{label}
			</label>
			<div className="mt-1 flex flex-wrap rounded-md">
				<div className="relative flex items-stretch flex-grow focus-within:z-10 w-full">
					<div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
						{icon}
					</div>
					<input
						type={type}
						id={id}
						name={name}
						className={classNames(
							"block pl-7 py-1 pr-1 xl:text-lg text-base w-full focus:outline-none",
							valueClass
						)}
						disabled={disabled}
						defaultValue={defaultValue}
						onFocus={handelFocus}
						{...register}
					/>
				</div>
				<span className="text-xs font-montserrat-semibold">
					{errorMessage}
				</span>
			</div>
		</div>
	);
};

export default InfoLabel;
