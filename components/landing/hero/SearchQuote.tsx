import classNames from "classnames";

import ArrowCircleButton from "@/components/auth/ArrowCircleButton";

const SearchQuote: React.FC = (): JSX.Element => {
	return (
		<div className="flex space-x-2 rounded-full items-center bg-white pl-3 text-left">
			<div>
				<label
					htmlFor="project"
					className="block text-red font-montserrat-semibold text-sm pl-1"
				>
					Project:
				</label>
				<input
					id="project"
					name="project"
					className={classNames(
						"text-xs rounded-full focus:outline-none border-0 pl-1"
					)}
					placeholder="What do you need done?"
				/>
			</div>

			<div className="w-48 text-right">
				<ArrowCircleButton
					fontsize="text-xs"
					arrowSize="h-4 w-4"
					buttonSize="h-12 w-12"
				>
					Instant Quote
				</ArrowCircleButton>
			</div>
		</div>
	);
};

export default SearchQuote;
