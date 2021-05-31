interface Props {
	children: React.ReactNode;
	src: string;
	height?: string;
}

const Background: React.FC<Props> = ({
	children,
	src,
	height = "800px",
}) => {
	return (
		<div
			style={{
				backgroundImage: `${src}`,
				height: `${height}`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}
		>
			{children}
		</div>
	);
};

export default Background;
