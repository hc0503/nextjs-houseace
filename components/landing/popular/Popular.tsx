import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import PopularItem from "./PopularItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Popular: React.FC = (): JSX.Element => {
	const settings: Settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 3,
		speed: 500,
		rows: 1,
		slidesPerRow: 1,
	};
	const [slide, setSlide] = useState<Slider>();
	return (
		<>
			<div className="flex justify-between items-center">
				<p className="text-4xl font-bold">Popular projects</p>
				<div className="flex text-gray">
					<button
						className="button"
						onClick={() => slide.slickPrev()}
					>
						<AiOutlineLeft className="h-6 w-6" />
					</button>
					<button
						className="button"
						onClick={() => slide.slickNext()}
					>
						<AiOutlineRight className="h-6 w-6" />
					</button>
				</div>
			</div>
			<div className="pt-11">
				<Slider ref={(slider) => setSlide(slider)} {...settings}>
					<PopularItem
						srcImage="/images/landing/popular1.png"
						alt="Popular"
						title="Bathroom renovation"
					/>
					<PopularItem
						srcImage="/images/landing/popular2.png"
						alt="Popular"
						title="Bathroom renovation"
					/>
					<PopularItem
						srcImage="/images/landing/popular3.png"
						alt="Popular"
						title="Bathroom renovation"
					/>
					<PopularItem
						srcImage="/images/landing/popular2.png"
						alt="Popular"
						title="Bathroom renovation"
					/>
				</Slider>
			</div>
		</>
	);
};

export default Popular;
