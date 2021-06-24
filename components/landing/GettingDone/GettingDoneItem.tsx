import ArrowCircleButton from "../../auth/ArrowCircleButton";
import ReactStars from "react-rating-stars-component";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const GettingDoneItem: React.FC<IGettingDoneItem> = ({
	src,
	alt,
	title,
	location,
	userAvatar,
	userName,
	rate,
}): JSX.Element => {
	return (
		<>
			<div className="my-14 mx-1 p-6 border rounded-xl shadow-sm bg-white relative">
				<div className="flex justify-end">
					<img
						src={src}
						alt={alt}
						className="h-14 w-auto rounded-md absolute right-7 -top-7"
					/>
				</div>
				<div className="text-left">
					<p className="text-lg font-montserrat-bold">{title}</p>
					<p className="text-sm text-gray-light">{location}</p>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2 py-2">
						<img src={userAvatar} alt="Avatar" className="h-10" />
						<div>
							<p className="text-sm font-montserrat-bold">
								{userName}
							</p>
							<ReactStars
								size={20}
								count={5}
								edit={false}
								value={rate}
								emptyIcon={<AiOutlineStar />}
								filledIcon={<AiFillStar />}
							/>
						</div>
					</div>
					<div className="w-24 flex justify-items-center justify-end">
						<ArrowCircleButton
							fontsize="text-2xs"
							buttonSize="w-9 h-9 hover:w-20"
							itemPadding="pr-1"
						>
							Instant Quote
						</ArrowCircleButton>
					</div>
				</div>
			</div>
		</>
	);
};

export default GettingDoneItem;
