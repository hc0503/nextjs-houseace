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
						"text-sm rounded-full focus:outline-none border-0 px-1 pt-1 pb-2 w-full"
					)}
					placeholder="What do you need done?"
				/>
			</div>
			<div className="text-right w-32">
				<ArrowCircleButton
					fontsize="text-xs"
					buttonSize="w-16 h-16 hover:w-32"
				>
					Instant Quote
				</ArrowCircleButton>
			</div>
		</div>
	);
};

export default HeroSearch;
