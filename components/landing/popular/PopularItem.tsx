const PopularItem: React.FC<IPopularItem> = ({
	src,
	title,
	alt,
}): JSX.Element => {
	return (
		<div className="px-2">
			<img
				src={src}
				alt={alt}
				height="h-580"
				className="rounded-lg"
			/>
			<p className="text-base pt-5">{title}</p>
		</div>
	);
};

export default PopularItem;
