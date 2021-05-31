interface IProps {
	src: string;
	alt: string;
	classNames?: string;
	description?: string;
}

const IntroduceItem: React.FC<IProps> = ({
	src,
	alt = "Introduce Image",
	classNames = "",
	description = "",
}) => (
	<div className="w-44 text-center">
		<div className="flex justify-center">
			<img src={src} alt={alt} className="h-16" />
		</div>
		<p className={classNames}>{description}</p>
	</div>
);

export default IntroduceItem;
