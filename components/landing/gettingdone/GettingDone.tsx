import GettingItem from "./GettingItem";

const GettingDone: React.FC = (): JSX.Element => {
	return (
		<>
			<div className="text-center">
				<p className="text-4xl font-bold p-3">
					See what others are getting done
				</p>
				<p className="text-sm px-96 py-2">
					{`We know it sounds unbelievable but it's befinitely possible,
					over the years we've perfected our pricing system to work to
					pinpoint accuracy so it generates the most accurate market
					price for your project.`}
				</p>
			</div>
			<div className="flex space-x-1 space-y-1">
				<GettingItem />
				<GettingItem />
				<GettingItem />
				<GettingItem />
				<GettingItem />
				<GettingItem />
			</div>
			<div className="flex space-x-1 space-y-1">
				<GettingItem />
				<GettingItem />
				<GettingItem />
				<GettingItem />
				<GettingItem />
				<GettingItem />
			</div>
		</>
	);
};

export default GettingDone;
