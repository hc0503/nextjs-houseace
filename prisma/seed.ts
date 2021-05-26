import prisma from "../lib/prisma";

async function seedRoleList(): Promise<void> {
	await prisma.role.createMany({
		data: [
			{ name: "Client (Homeowner)" },
			{ name: "Ace (Contractor)" },
			{ name: "Ace (Planner)" },
			{ name: "Ace (Supplier)" },
		],
		skipDuplicates: true,
	});

	console.info("- Shortlist Seeded");
}

async function main(): Promise<void> {
	await seedRoleList();
}

main()
	.catch((e) => {
		console.error(e, "Seeding failed");
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
