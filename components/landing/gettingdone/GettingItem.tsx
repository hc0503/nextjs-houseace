import ArrowCircleButton from "@/components/auth/ArrowCircleButton";
import StarRatingComponent from "react-star-rating-component";

const GettingItem: React.FC = () => {
	return (
		<>
			<div className="p-2 w-72">
				<div className="flex justify-end">
					<img
						src="/images/landing/banner.png"
						alt=""
						className="h-10 rounded-md"
					/>
				</div>
				<div className="text-left">
					<p className="text-lg font-bold">Bathroom Renovation</p>
					<p className="text-sm">38 McKillop Street, Victoria-3375</p>
				</div>
				<div className="flex space-y-2 py-2 items-center">
					<img src="/images/users/jene.png" alt="" className="h-10" />
					<div>
						<p className="text-sm font-bold">Ashley B Lay</p>
						<StarRatingComponent
							name="rate"
							editing={false}
							starCount={5}
							value={5}
						/>
					</div>
					<div className="">
						<ArrowCircleButton
							arrowSize={4}
							fontsize="text-xs"
							padding="px-1"
						>
							Instant Quote
						</ArrowCircleButton>
					</div>
				</div>
			</div>
		</>
	);
};

export default GettingItem;
