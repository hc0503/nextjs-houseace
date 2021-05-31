import SearchQuote from "@/components/landing/banner/SearchQuote";

const Banner: React.FC = () => {
	return (
		<div className="container mx-auto text-center mt-16">
			<div className="text-white">
				<p className="text-5xl font-bold">
					Home Renovation Made Easy
				</p>
				<p className="text-2xl font-normal">
					Get a free, no obligation quote in 2 minutes.
				</p>
			</div>
			<div className="flex justify-center mt-2">
				<SearchQuote />
			</div>
		</div>
	);
};

export default Banner;
