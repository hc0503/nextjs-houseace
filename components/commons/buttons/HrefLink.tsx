import Link from "next/link";

const HrefLink = (props: iHrefLinkProps) => {
	const {
		href = "#",
		className = "",
		children = "Link",
	} = props;

	return (
		<Link href={href}>
			<a
				className={`
					font-medium
					text-red
					hover:text-red-dark
					${className}
				`}
			>
				{children}
			</a>
		</Link>
	);
};

export default HrefLink;
