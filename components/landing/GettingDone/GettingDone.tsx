import Slider, { Settings } from "react-slick";

import GettingDoneItem from "./GettingDoneItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GettingDone: React.FC = (): JSX.Element => {
	const slideSettings: Settings = {
		className: "center",
		infinite: true,
		speed: 2000,
		autoplaySpeed: 2000,
		autoplay: false,
		slidesToShow: 4,
		slidesToScroll: 2,
		rows: 2,
		arrows: false,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					rows: 2,
				},
			},
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					rows: 2,
				},
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					rows: 2,
				},
			},
		],
	};
	const gettingDoneItems: IGettingDoneItem[] = [
		{
			src: "/images/landing/gettingdone1.png",
			alt: "Getting Done",
			title: "Bathroom Renovation",
			location: "38 McKillop Street, Victoria-3375",
			userAvatar: "/images/users/Jonny.png",
			userName: "Ashley B Lay",
			rate: 5,
		},
		{
			src: "/images/landing/gettingdone2.png",
			alt: "Getting Done",
			title: "Bathroom Renovation",
			location: "38 McKillop Street, Victoria-3375",
			userAvatar: "/images/users/Ellipse.png",
			userName: "Ashley B Lay",
			rate: 4,
		},
		{
			src: "/images/landing/gettingdone3.png",
			alt: "Getting Done",
			title: "Bathroom Renovation",
			location: "38 McKillop Street, Victoria-3375",
			userAvatar: "/images/users/Jonny.png",
			userName: "Ashley B Lay",
			rate: 3,
		},
		{
			src: "/images/landing/gettingdone2.png",
			alt: "Getting Done",
			title: "Bathroom Renovation",
			location: "38 McKillop Street, Victoria-3375",
			userAvatar: "/images/users/Jene.png",
			userName: "Ashley B Lay",
			rate: 5,
		},
		{
			src: "/images/landing/gettingdone3.png",
			alt: "Geting Done",
			title: "Bathroom Renovation",
			location: "38 McKillop Street, Victoria-3375",
			userAvatar: "/images/users/Ellipse.png",
			userName: "Ashley B Lay",
			rate: 2,
		},
		{
			src: "/images/landing/gettingdone3.png",
			alt: "Geting Done",
			title: "Bathroom Renovation",
			location: "38 McKillop Street, Victoria-3375",
			userAvatar: "/images/users/Jonny.png",
			userName: "Ashley B Lay",
			rate: 2,
		},
		{
			src: "/images/landing/gettingdone2.png",
			alt: "Getting Done",
			title: "Bathroom Renovation",
			location: "38 McKillop Street, Victoria-3375",
			userAvatar: "/images/users/Jene.png",
			userName: "Ashley B Lay",
			rate: 5,
		},
		{
			src: "/images/landing/gettingdone3.png",
			alt: "Geting Done",
			title: "Bathroom Renovation",
			location: "38 McKillop Street, Victoria-3375",
			userAvatar: "/images/users/Jonny.png",
			userName: "Ashley B Lay",
			rate: 2,
		},
		{
			src: "/images/landing/gettingdone3.png",
			alt: "Getting Done",
			title: "Bathroom Renovation",
			location: "38 McKillop Street, Victoria-3375",
			userAvatar: "/images/users/Jonny.png",
			userName: "Ashley B Lay",
			rate: 3,
		},
		{
			src: "/images/landing/gettingdone2.png",
			alt: "Getting Done",
			title: "Bathroom Renovation",
			location: "38 McKillop Street, Victoria-3375",
			userAvatar: "/images/users/Jene.png",
			userName: "Ashley B Lay",
			rate: 5,
		},
	];
	return (
		<div className="bg-red-160 pb-9">
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
			<div className="mt-3">
				<Slider {...slideSettings}>
					{gettingDoneItems.map(
						(item: IGettingDoneItem, key: number) => (
							<GettingDoneItem
								key={`GettingDoneItem-${key}`}
								src={item.src}
								alt={item.alt}
								title={item.title}
								location={item.location}
								userAvatar={item.userAvatar}
								userName={item.userName}
								rate={item.rate}
							/>
						)
					)}
				</Slider>
			</div>
		</div>
	);
};

export default GettingDone;
