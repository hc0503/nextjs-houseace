import classNames from "classnames";
import Avatar from "./Avatar";
import Message from "./Message";

type ChatItemProps = {
	photoUrl: string;
	name: string;
	description?: string;
	text?: string;
	filename?: string;
	sentDate?: string;
	type?: "sender" | "receiver" | string;
	className?: string;
};

const ChatItem: React.FC<ChatItemProps> = ({
	name,
	description,
	photoUrl,
	text,
	filename,
	className,
	sentDate,
	type = "sender",
}) => {
	return (
		<div className={classNames("", className)}>
			<div
				className={classNames("flex", {
					"justify-end": type === "sender",
				})}
			>
				<Avatar
					type={type}
					name={name}
					description={description}
					photoUrl={photoUrl}
				></Avatar>
			</div>
			<div
				className={classNames("flex", {
					"justify-end": type === "sender",
				})}
			>
				<Message
					className="mt-2 mx-8"
					type={type}
					sentDate={sentDate}
					text={text}
					filename={filename}
				></Message>
			</div>
		</div>
	);
};

export default ChatItem;
