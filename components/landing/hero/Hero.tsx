import SearchQuote from "@/components/landing/hero/SearchQuote";

const Hero: React.FC = () => {
	return (
		<div className="text-center pt-44">
			<div className="text-white">
				<p className="text-5xl font-montserrat-bold">
					Home Renovation Made Easy
				</p>
				<p className="text-2xl">
					Get a free, no obligation quote in 2 minutes.
				</p>
			</div>
			<div className="flex justify-center mt-2">
				<SearchQuote />
			</div>
		</div>
	);
};

export default Hero;
