const Logo = (props: iImgProps) => {
	const {
		className = "",
		alt = "Houseace",
		src = "/",
	} = props;

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
