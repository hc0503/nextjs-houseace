import Slider from "react-slick";
import GettingItem from "./GettingItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GettingDone: React.FC = (): JSX.Element => {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 4,
		speed: 500,
		rows: 2,
	};
	return (
		<div>
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
	);
};

export default GettingDone;
