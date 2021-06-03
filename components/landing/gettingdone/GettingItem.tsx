import ArrowCircleButton from "@/components/auth/ArrowCircleButton";
import StarRatingComponent from "react-star-rating-component";

const GettingItem: React.FC = () => {
	return (
		<>
			<div className="my-2 mx-1 p-5 border rounded-xl shadow-sm">
				<div className="flex justify-end">
					<img
						src="/images/landing/gettingdone.png"
						alt=""
						className="h-14 w-auto rounded-md"
					/>
				</div>
				<div className="text-left">
					<p className="text-lg font-montserrat-bold">
						Bathroom Renovation
					</p>
					<p className="text-sm text-gray-light">
						38 McKillop Street, Victoria-3375
					</p>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2 py-2">
						<img
							src="/images/users/Jene.png"
							alt="Avatar"
							className="h-10"
						/>
						<div>
							<p className="text-sm font-montserrat-bold">
								Ashley B Lay
							</p>
							<StarRatingComponent
								name="rate"
								editing={false}
								starCount={5}
								value={5}
							/>
						</div>
					</div>
					<ArrowCircleButton
						arrowSize="h-4 w-4"
						fontsize="text-2xs"
						padding="px-1"
					>
						Instant Quote
					</ArrowCircleButton>
				</div>
			</div>
		</>
	);
};

export default GettingItem;
