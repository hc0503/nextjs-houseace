import IntroduceItem from "./IntroduceItem";

const Introduce: React.FC = () => (
	<div className="grid lg:grid-cols-4 md:grid-cols-2 w-full items-center justify-items-center">
		<IntroduceItem
			src="/images/landing/entrepreneur.png"
			alt="Entrepreneur"
			description="Houseace utilizes tech to make renovations easier to arrange and understand"
		/>
		<IntroduceItem
			src="/images/landing/homely.png"
			alt="Homely"
			description="Visit houseace for free, online renovation quotes in just 2 minutes."
		/>
		<IntroduceItem
			src="/images/landing/know_techie.png"
			alt="Know Techie"
			description="Houseace brings the power of technology to home renovations."
		/>
		<IntroduceItem
			src="/images/landing/lendi.png"
			alt="Lendi"
			description="Now it's time to get an online renovation quote."
		/>
	</div>
);

export default Introduce;
