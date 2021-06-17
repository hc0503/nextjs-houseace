import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import PopularItem from "./PopularItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slickSettings: Settings = {
	className: "center",
	infinite: true,
	speed: 2000,
	autoplaySpeed: 2000,
	autoplay: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	initialSlide: 0,
	arrows: false,
	responsive: [
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 0,
			},
		},
		{
			breakpoint: 601,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 0,
			},
		},
	],
};
const popularItems: IPopularItem[] = [
	{
		src: "/images/landing/popular1.png",
		alt: "Popular1",
		title: "Bathroom renovation",
	},
	{
		src: "/images/landing/popular2.png",
		alt: "Popular2",
		title: "Bathroom renovation",
	},
	{
		src: "/images/landing/popular3.png",
		alt: "Popular3",
		title: "Bathroom renovation",
	},
	{
		src: "/images/landing/popular2.png",
		alt: "Popular2",
		title: "Bathroom renovation",
	},
];

const Popular: React.FC = (): JSX.Element => {
	const [slide, setSlide] = useState<Slider>();
	return (
		<>
			<div className="flex justify-between items-center">
				<p className="text-4xl font-montserrat-bold">
					Popular projects
				</p>
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
				<Slider ref={(slider) => setSlide(slider)} {...slickSettings}>
					{popularItems.map((item: IPopularItem, key: number) => (
						<PopularItem
							key={`PopularItem-${key}`}
							src={item.src}
							alt={item.alt}
							title={item.title}
						/>
					))}
				</Slider>
			</div>
		</>
	);
};

export default Popular;
