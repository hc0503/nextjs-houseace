import classNames from "classnames";

import ArrowCircleButton from "@/components/auth/ArrowCircleButton";

const HeroSearch: React.FC = (): JSX.Element => {
	return (
		<div className="flex justify-between space-x-2 rounded-full items-center bg-white pl-6 text-left w-full md:w-1/2 mx-1">
			<div className="w-full">
				<label
					htmlFor="project"
					className="block text-red font-montserrat-semibold text-sm pl-1 pt-2"
				>
					Project:
				</label>
				<input
					id="project"
					name="project"
					className={classNames(
						"text-sm rounded-full focus:outline-none border-0 px-1 py-2 w-full"
					)}
					placeholder="What do you need done?"
				/>
			</div>
			<div className="text-right w-full">
				<ArrowCircleButton
					fontsize="text-xs md:text-sm"
					arrowSize="h-4 w-4"
					buttonSize="h-16 w-16"
				>
					Instant Quote
				</ArrowCircleButton>
			</div>
		</div>
	);
};

export default HeroSearch;
