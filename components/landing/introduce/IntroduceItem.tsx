interface IProps {
	src: string;
	alt: string;
	description?: string;
}

const IntroduceItem: React.FC<IProps> = ({
	src,
	alt = "Introduce Image",
	description = "",
}) => (
	<div className="w-44 text-center">
		<div className="flex justify-center">
			<img src={src} alt={alt} className="h-14" />
		</div>
		<p className="text-xs">{description}</p>
	</div>
);

export default IntroduceItem;
