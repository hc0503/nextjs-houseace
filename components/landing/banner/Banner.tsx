import SearchQuote from "@/components/landing/banner/SearchQuote";

const Banner: React.FC = () => {
	return (
		<div className="text-center pt-44 pb-96">
			<div className="text-white">
				<p className="text-5xl font-montserrat-bold">
					Home Renovation Made Easy
				</p>
				<p className="text-2xl">
					Get a free, no obligation quote in 2 minutes.
				</p>
			</div>
			<div className="flex justify-center pt-2 pb-40">
				<SearchQuote />
			</div>
		</div>
	);
};

export default Banner;
