import classNames from "classnames";
import { SearchIcon } from "@heroicons/react/solid";

interface IProps extends IInput {
	border?: string;
	rounded?: string;
}
const SearchInput: React.FC<IProps> = ({
	id,
	placeHolder,
	type = "text",
	name,
	border = "border-transparent focus:border-transparent",
	rounded,
	onKeyPress,
}): JSX.Element => (
	<>
		<div className="relative w-full focus-within:text-gray-700">
			<div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
				<SearchIcon className="h-5 w-5" aria-hidden="true" />
			</div>
			<input
				id={id}
				className={classNames(
					"block w-full h-full pl-8 pr-3 py-2 placeholder-gray-light focus:outline-none focus:ring-0 text-xs",
					border,
					rounded
				)}
				placeholder={placeHolder}
				type={type}
				name={name}
				onKeyPress={onKeyPress}
			/>
		</div>
	</>
);

export default SearchInput;
