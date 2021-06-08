import classNames from "classnames";

interface IProps extends IInput {
	children: React.ReactNode;
}

const OutlineInput: React.FC<IProps> = ({
	children,
	id,
	name,
	placeHolder,
	type,
}): JSX.Element => {
	return (
		<div className="mt-1 focus-within:text-gray text-gray-light relative">
			<div className="absolute inset-y-0 left-0 pl-3 flex items-center">
				{children}
			</div>
			<input
				id={id}
				name={name}
				placeholder={placeHolder}
				type={type}
				className={classNames(
					"block w-full px-3 pl-10 py-2 focus:outline-none border-b-2 focus:border-red"
				)}
			/>
		</div>
	);
};

export default OutlineInput;
