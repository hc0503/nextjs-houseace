interface iChildren {
	children: React.ReactNode;
}
interface CustomNodeJsGlobal extends NodeJS.Global {
	prisma: PrismaClient;
}
declare module "*.svg" {
	import { ReactElement, SVGProps } from "react";
	const content: (props: SVGProps<SVGElement>) => ReactElement;
	export default content;
}
