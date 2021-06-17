import IntroduceItem from "./IntroduceItem";

const introduceItems: IIntroduceItem[] = [
	{
		src: "/images/landing/entrepreneur.png",
		alt: "Entrepreneur",
		description:
			"Houseace utilizes tech to make renovations easier to arrange and understand.",
	},
	{
		src: "/images/landing/homely.png",
		alt: "Homely",
		description:
			"Visit houseace for free, online renovation quotes in just 2 minutes.",
	},
	{
		src: "/images/landing/know_techie.png",
		alt: "Know Techie",
		description:
			"Houseace brings the power of technology to home renovations.",
	},
	{
		src: "/images/landing/lendi.png",
		alt: "Lendi",
		description: "Now it's time to get an online renovation quote.",
	},
];

const Introduce: React.FC = (): JSX.Element => (
	<div className="grid md:grid-cols-4 grid-cols-2 w-full items-center justify-items-center pb-10">
		{introduceItems.map((item: IIntroduceItem, key: number) => (
			<IntroduceItem
				key={`IntroduceItem-${key}`}
				src={item.src}
				alt={item.alt}
				description={item.description}
			/>
		))}
	</div>
);

export default Introduce;
