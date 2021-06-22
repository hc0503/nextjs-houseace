import HeroSearch from "./HeroSearch";

const Hero: React.FC = () => {
	return (
		<div className="text-center pt-44 xl:pt-72">
			<div className="text-white">
				<p className="text-5xl font-montserrat-bold">
					Home Renovation Made Easy
				</p>
				<p className="text-2xl">
					Get a free, no obligation quote in 2 minutes.
				</p>
			</div>
			<div className="flex justify-center mt-2">
				<HeroSearch />
			</div>
		</div>
	);
};

export default Hero;
