interface iChildren {
	children: React.ReactNode;
}
interface CustomNodeJsGlobal extends NodeJS.Global {
	prisma: PrismaClient;
}
