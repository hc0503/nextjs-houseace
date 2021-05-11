import Link from 'next/link';

const HrefLink = (props: iHrefLinkProps) => {
	const {
		href = '#',
		className = '',
		children = 'Link',
	} = props;

	return (
		<Link
			href={href}
		>
			<a
				className={`
					font-medium
					text-red-400
					hover:text-red-300
					${className}
				`}
			>
				{children}
			</a>
		</Link>
	);
}

export default HrefLink;
