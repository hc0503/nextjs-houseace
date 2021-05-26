import classNames from "classnames";

interface Props {
	id?: string;
	name: string;
	label?: string;
	className?: string;
	defaultValue?: string | number;
	description?: string;
	options: any[];
	errorMessage?: string;
	onChange?: any;
}

const AuthSelectGroup: React.FC<Props> = ({
	id,
	name,
	label,
	className = "",
	defaultValue,
	options,
	description,
	errorMessage = "",
	onChange,
}): JSX.Element => {
	return (
		<div>
			<label
				htmlFor={id}
				className="block text-sm font-medium text-gray-700"
			>
				{label}
			</label>
			<select
				id={id}
				name={name}
				className={classNames(
					"mt-1 block w-full pl-3 pr-10 py-2 focus:outline-none focus:ring-red-moredark focus:border-red-moredark sm:text-sm rounded-md bg-red",
					className,
					{ "border-2 border-red-moredark": errorMessage },
					{ "border border-white": !errorMessage }
				)}
				defaultValue={defaultValue}
				onBlur={onChange}
			>
				{description && (
					<option value={0} disabled>
						{description}
					</option>
				)}
				{options.map((option, key) => (
					<option key={`role-${key}`} value={option.id}>
						{option.name}
					</option>
				))}
			</select>
			{errorMessage && (
				<p className="mt-2 text-sm text-red-moredark font-bold">
					{errorMessage}
				</p>
			)}
		</div>
	);
};

export default AuthSelectGroup;
