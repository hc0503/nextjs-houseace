import Slider from "react-slick";
import GettingItem from "./GettingItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GettingDone: React.FC = (): JSX.Element => {
	const settings = {
		className: "center",
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		rows: 2,
		arrows: false,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 0,
					rows: 2,
				},
			},
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 0,
					rows: 2,
				},
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0,
					rows: 2,
				},
			},
		],
	};
	return (
		<div className="">
			<div className="container mx-auto text-center">
				<h3 className="pt-16 text-4xl font-montserrat-bold">
					See what others are getting done
				</h3>
				<p className="pt-7 text-sm">
					We know it sounds unbelievable but it’s definitely possible,
					over the years we’ve perfected our pricing system to work to
					pinpoint
					<br />
					accuracy so it generates the most accurate market price for
					your project.
				</p>
			</div>
			<div className="pt-16">
				<Slider {...settings}>
					<GettingItem />
					<GettingItem />
					<GettingItem />
					<GettingItem />
					<GettingItem />
					<GettingItem />
					<GettingItem />
					<GettingItem />
					<GettingItem />
					<GettingItem />
				</Slider>
			</div>
		</div>
	);
};

export default GettingDone;
