import classNames from "classnames";

const SearchInputGroup: React.FC<IInputGroup> = ({
	id,
	name,
	label,
	type = "text",
	autoComplete = "off",
	required = false,
	className = "",
	placeholder,
	onChange,
}): JSX.Element => {
	return (
		<div>
			<label
				htmlFor={id}
				className="block font-semibold text-sm pl-3"
			>
				{label}
			</label>
			<input
				name={name}
				className={classNames(
					"text-xs rounded-full focus:outline-none border-0 focus:ring-0",
					className
				)}
				type={type}
				placeholder={placeholder}
				autoComplete={autoComplete}
				required={required}
				onChange={onChange}
			/>
		</div>
	);
};

export default SearchInputGroup;
