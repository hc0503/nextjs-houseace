import HeroCard from "../components/landing/HeroCard";
import NavBar from "../components/landing/NavBar";
import StepItem from "../components/landing/StepItem";

export default function Landing(): JSX.Element {
	const steps = [
		{
			index: 1,
			status: true,
			icon: "../images/landing/add_project.svg",
			title: "Add Project",
		},
		{
			index: 2,
			status: true,
			icon: "../images/landing/add_project.svg",
			title: "Adjust Area/Size",
		},
		{
			index: 3,
			status: false,
			icon: "../images/landing/add_project.svg",
			title: "Instant Calculation",
		},
	];

	return (
		<div>
			<NavBar />
			<HeroCard />
			<div className="container mx-auto">
				<div className="mt-10 sm:mt-20 px-5 sm:px-0 sm:mx-0">
					<p className="font-bold text-red mb-4 lg:text-4xl md:text-2xl sm:text-xl text-lg">
						Real Prices On The Spot
					</p>
					<p className="text-black sm:text-lg text-sm">
						Answer a few questions about your current bathroom and
						renovation goals to receive a detailed, all-inclusive
						estimate.
					</p>
				</div>
				<div className="mt-8 sm:mt-14 w-full sm:w-1/2">
					{steps.map((value: iLandingStepType, id: number) => (
						<StepItem
							className="my-1"
							item={value}
							key={`step-${id}`}
						/>
					))}
				</div>
				<div className="mt-8 sm:mt-14 w-full sm:w-1/2"></div>
			</div>
		</div>
	);
}
