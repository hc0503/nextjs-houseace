interface iChildren {
	children: React.ReactNode;
}

interface iLandingStepType {
	status: boolean;
	index: number;
	icon: ReactElement;
	title: string;
}

declare module "*.svg" {
	import { ReactElement, SVGProps } from "react";
	const content: (props: SVGProps<SVGElement>) => ReactElement;
	export default content;
}
