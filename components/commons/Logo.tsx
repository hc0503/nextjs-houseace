interface Props {
	className?: string;
	alt?: string;
	src?: string;
}
const Logo: React.FC<Props> = ({
	className = "",
	alt = "Houseace",
	src = "/",
}): JSX.Element => {
	return (
		<img
			src={src}
			alt={alt}
			className={`
				max-h-14
				${className}
			`}
		/>
	);
};

export default Logo;
