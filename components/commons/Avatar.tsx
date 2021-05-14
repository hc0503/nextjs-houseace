interface Props {
	className?: string;
	alt?: string;
	src?: string;
}
const Avatar: React.FC<Props> = ({
	className = "",
	alt = "Avatar",
	src = "",
}): JSX.Element => {
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
