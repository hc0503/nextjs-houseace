import ChatItem from "./activity/ChatItem";

const chatItems = [
	{
		name: "Mari Jonos",
		description: "Jr. Architect",
		photoUrl: "/images/users/Ellipse.png",
		text: "Hello Jonny, How is everything? I just found that you are quoted for bathroom renovations. Would like to discuss Hello Jonny, How is everything? I just found that you are quoted for bathroom renovations. Would like to discuss more about it",
		filename: "",
		sentDate: "1d ago",
		type: "receiver",
	},
	{
		name: "Jonny Simi",
		description: "",
		photoUrl: "/images/users/Jonny.png",
		text: "Hello Jonny, How is everything? I just found that you are quoted for bathroom renovations. Would like to discuss Hello Jonny, How is everything? I just found that you are quoted for bathroom renovations. Would like to discuss more about it",
		filename: "",
		sentDate: "1d ago",
		type: "sender",
	},
	{
		name: "Jene Smith",
		description: "Project Manager",
		photoUrl: "/images/users/Jene.png",
		text: "",
		filename: "Update a new Quote to project.jpg",
		sentDate: "3hrs ago",
		type: "receiver",
	},
	{
		name: "Jene Smith",
		description: "Project Manager",
		photoUrl: "/images/users/Jene.png",
		text: "",
		filename: "",
		sentDate: "3hrs ago",
		type: "receiver",
	},
];

const Activity: React.FC = () => {
	return (
		<div>
			{chatItems.map((chatItem, key) => {
				return (
					(chatItem.text !== "" || chatItem.filename !== "") && (
						<ChatItem
							key={key}
							className="mt-4 mx-5"
							name={chatItem.name}
							filename={chatItem.filename}
							description={chatItem.description}
							photoUrl={chatItem.photoUrl}
							type={chatItem.type}
							sentDate={chatItem.sentDate}
							text={chatItem.text}
						/>
					)
				);
			})}
		</div>
	);
};

export default Activity;
