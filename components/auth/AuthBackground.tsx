interface Props {
	background: string;
	alt?: string;
}
const AuthBackground: React.FC<Props> = ({
	background,
	alt = "Auth background",
}): JSX.Element => {
	return (
		<>
			<div className="hidden lg:block relative w-0 flex-1">
				<img
					className="absolute inset-0 h-full w-full object-cover"
					src={background}
					alt={alt}
				/>
			</div>
		</>
	);
};

export default AuthBackground;
