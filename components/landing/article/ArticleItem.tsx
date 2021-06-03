import RoundButton from "../renovation/RoundButton";

interface Props {
	srcImage: string;
	alt: string;
	title: string;
	date: string;
	description: string;
}

const ArticleItem: React.FC<Props> = ({
	srcImage,
	title,
	alt,
	date,
	description,
}): JSX.Element => {
	return (
		<div className="px-2 pb-14 rounded-lg">
			<img
				src={srcImage}
				alt={alt}
				height={360}
				width={572}
				className="bg-cover bg-center"
			/>
			<div className="px-5 py-5">
				<p className="text-xl font-montserrat-bold">{title}</p>
				<p className="pt-2.5 text-sm text-gray-light">{date}</p>
				<p className="pt-8 text-base text-gray-light">
					{description}
				</p>
				<div className="pt-9">
					<RoundButton padding="px-8 py-2.5" fontSize="text-xs">
						Read More
					</RoundButton>
				</div>
			</div>
		</div>
	);
};

export default ArticleItem;
