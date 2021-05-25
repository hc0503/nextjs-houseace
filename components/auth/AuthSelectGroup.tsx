import { sessionOptions } from "@/lib/iron-session";
import classNames from "classnames";

interface Props {
	id?: string;
	name: string;
	label?: string;
	className?: string;
	defaultValue?: string | number;
	description?: string;
	options: any[];
}

const AuthSelectGroup: React.FC<Props> = ({
	id,
	name,
	label,
	className = "",
	defaultValue,
	options,
	description,
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
					"mt-1 block w-full pl-3 pr-10 py-2 border border-white focus:outline-none focus:ring-red-moredark focus:border-red-moredark sm:text-sm rounded-md bg-red",
					className
				)}
				defaultValue={defaultValue}
			>
				{description && (
					<option value={0} disabled>
						{description}
					</option>
				)}
				{options.map((option, key) => (
					<option key={`role-${key}`} value={option.value}>
						{option.text}
					</option>
				))}
			</select>
		</div>
	);
};

export default AuthSelectGroup;
