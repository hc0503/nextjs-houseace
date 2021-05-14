import React from "react";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";

function HeroCard() {
	return (
		<div className="relative">
			<div className="absolute inset-0">
				<img
					className="h-full w-full object-cover"
					src="../images/landing.png"
					alt="People working on laptops"
				/>
				<div className="absolute inset-0 mix-blend-multiply bg-gradient-to-b from-transparent to-gray-800" />
			</div>
			<div className="relative container mx-auto pt-16 pb-16 sm:pt-24 lg:pt-64 lg:pb-28 text-white px-5 sm:px-0">
				<p className="font-bold mb-4 lg:text-4xl md:text-2xl sm:text-xl text-lg">
					Using the Calculator
				</p>
				<p className="lg:text-2xl md:text-xl sm:text-lg text-sm">
					If you're budgeting for a home renovation the Houseace calculator is best place to start.
					Get an instant estimate or try our quick quotes
				</p>
				<div className="absolute bottom-0 right-0">
					<button
						type="button"
						className="inline-flex items-center px-6 lg:py-3 md:py-2 sm:py-1 border border-transparent text-base text-white bg-red hover:bg-red-dark focus:outline-none"
					>
						Want an online quote instead?
						<ArrowCircleRightIcon className="ml-3 mr-1 h-5 w-5" aria-hidden="true" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default HeroCard;
