const Avatar = (props: iImgProps) => {
	const {
		className = "",
		alt = "Avatar",
		src = "",
	} = props;

	return (
		<img
			src={src}
			alt={alt}
			className={`
				max-h-10
				max-w-10
				rounded-full
				${className}
			`}
		/>
	);
};

export default Avatar;
