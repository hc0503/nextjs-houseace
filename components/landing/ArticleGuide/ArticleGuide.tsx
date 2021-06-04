import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import ArticleGuideItem from "./ArticleGuideItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IArticleGuideItem {
	src: string;
	alt: string;
	date: string;
	title: string;
	description: string;
}
const ArticleGuide: React.FC = (): JSX.Element => {
	const settings: Settings = {
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
	const articleGuideItems: IArticleGuideItem[] = [
		{
			src: "/images/landing/article1.png",
			alt: "Article1",
			title: "Nullam neque sapien pharetra",
			date: "January 19th, 2016",
			description:
				"Fusce nec erat sed nisl lobortis eleifend. In eu fringilla leo. Curabitur dignissim efficitur lorem nec fermentum. Etiam Fusce nec erat sed nisl lobortis eleifend. In eu fringilla leo. ...",
		},
		{
			src: "/images/landing/article2.png",
			alt: "Article2",
			title: "Nullam neque sapien pharetra",
			date: "January 19th, 2016",
			description:
				"Fusce nec erat sed nisl lobortis eleifend. In eu fringilla leo. Curabitur dignissim efficitur lorem nec fermentum. Etiam Fusce nec erat sed nisl lobortis eleifend. In eu fringilla leo. ...",
		},
		{
			src: "/images/landing/article3.png",
			alt: "Article3",
			title: "Nullam neque sapien pharetra",
			date: "January 19th, 2016",
			description:
				"Fusce nec erat sed nisl lobortis eleifend. In eu fringilla leo. Curabitur dignissim efficitur lorem nec fermentum. Etiam Fusce nec erat sed nisl lobortis eleifend. In eu fringilla leo. ...",
		},
		{
			src: "/images/landing/article2.png",
			alt: "Article2",
			title: "Nullam neque sapien pharetra",
			date: "January 19th, 2016",
			description:
				"Fusce nec erat sed nisl lobortis eleifend. In eu fringilla leo. Curabitur dignissim efficitur lorem nec fermentum. Etiam Fusce nec erat sed nisl lobortis eleifend. In eu fringilla leo. ...",
		},
	];
	const [slide, setSlide] = useState<Slider>();
	return (
		<>
			<div className="flex justify-between items-center">
				<p className="text-4xl font-montserrat-bold">
					Articles & Guides
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
				<Slider ref={(slider) => setSlide(slider)} {...settings}>
					{articleGuideItems.map(
						(item: IArticleGuideItem, key: number) => (
							<ArticleGuideItem
								key={`ArticleGuideItem-${key}`}
								srcImage={item.src}
								alt={item.alt}
								title={item.title}
								date={item.date}
								description={item.description}
							/>
						)
					)}
				</Slider>
			</div>
		</>
	);
};

export default ArticleGuide;
