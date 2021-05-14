import Link from "next/link";

interface Props {
	href: string;
	className?: string;
	chilren?: string;
}
const HrefLink: React.FC<Props> = ({
	href = "#",
	className = "",
	children = "Link",
}): JSX.Element => {
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
