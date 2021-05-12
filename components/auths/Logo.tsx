
const Logo = (props: iLogoProps) => {
	const {
		className = '',
		alt = 'Logo',
		src = ''
	} = props;

	return (
		<img
			src={src}
			alt={alt}
			className={`
				h-20
				${className}
			`}
		/>
	);
}

export default Logo;
