import classNames from "classnames";

type AvatarProps = {
	type?: "sender" | "receiver" | string;
	photoUrl: string;
	name: string;
	description?: string;
	className?: string;
};

export default function Avatar({
	type,
	photoUrl,
	description,
	name,
	className,
}: AvatarProps): JSX.Element {
	return (
		<a
			href="#"
			className={classNames("flex-shrink-0 group block", className)}
		>
			{type === "receiver" ? (
				<div className="flex items-center">
					<div>
						<img
							className="inline-block h-9 w-9 rounded-full"
							src={photoUrl}
							alt=""
						/>
					</div>
					<div className="ml-3">
						<p className="text-sm font-montserrat-medium text-gray-700 group-hover:text-gray-900">
							{name}
						</p>
						<p className="text-xs font-montserrat-medium text-gray-500 group-hover:text-gray-700">
							{description}
						</p>
					</div>
				</div>
			) : (
				<div className="flex items-center">
					<div>
						<p className="text-sm font-montserrat-medium text-gray-700 group-hover:text-gray-900">
							{name}
						</p>
						<p className="text-xs font-montserrat-medium text-gray-500 group-hover:text-gray-700">
							{description}
						</p>
					</div>
					<div className="ml-3">
						<img
							className="inline-block h-9 w-9 rounded-full"
							src={photoUrl}
							alt=""
						/>
					</div>
				</div>
			)}
		</a>
	);
}
