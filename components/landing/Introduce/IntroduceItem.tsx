const IntroduceItem: React.FC<IIntroduceItem> = ({
	src,
	alt = "Introduce Image",
	description = "",
}) => (
	<div className="w-32 text-center pt-16">
		<div className="flex justify-center">
			<img src={src} alt={alt} className="w-full h-auto" />
		</div>
		<p className="text-xs">{description}</p>
	</div>
);

export default IntroduceItem;
