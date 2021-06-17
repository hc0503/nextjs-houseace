interface IGettingDoneItem {
	src: string;
	alt: string;
	title: string;
	location: string;
	userAvatar: string;
	userName: string;
	rate: number;
}
interface IIntroduceItem {
	src: string;
	alt: string;
	description: string;
}
interface IPopularItem {
	src: string;
	alt: string;
	title: string;
}
interface INavigation {
	name: string;
	href: string;
	icon?: React.ReactNode;
	color?: string;
}
