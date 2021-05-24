import classNames from "classnames";

type MessageProps = {
	text?: string;
	filename?: string;
	sentDate?: string;
	type?: "sender" | "receiver" | string;
	className?: string;
};

export default function Message({
	text,
	filename,
	className,
	sentDate,
	type = "sender",
}: MessageProps) {
	const fileext = /[^.]+$/.exec(filename);
	let prefix = "standard.png";
	console.log(fileext);
	if (
		fileext !== null &&
		(fileext.includes("jpg") || fileext.includes("png"))
	) {
		prefix = "image.png";
	}
	return (
		<div className={className}>
			{text && (
				<div
					className={classNames(
						"rounded-xl bg-red-50 py-2 px-4 max-w-message text-sm text-gray-800",
						{
							"text-right": type === "sender",
						}
					)}
				>
					{text}
				</div>
			)}
			{filename && (
				<div className="flex items-center rounded-xl bg-red-50 py-2 px-4 max-w-message">
					<div>
						<img
							className="inline-block h-8 w-8"
							src={"/images/project/" + prefix}
							alt=""
						/>
					</div>
					<div className="ml-2">
						<div
							className={classNames("text-sm text-gray-800", {
								"text-right": type === "sender",
							})}
						>
							{filename}
						</div>
						<div
							className={classNames("text-xs text-gray-400", {
								"text-right": type === "sender",
							})}
						>
							{sentDate}
						</div>
					</div>
					<button
						type="button"
						className="inline-flex items-center ml-10 px-3 py-1 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-red-light hover:bg-red focus:bg-red-dark"
					>
						View
					</button>
				</div>
			)}
		</div>
	);
}
