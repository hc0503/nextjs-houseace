import { GetServerSideProps } from "next";
import { withIronSession } from "next-iron-session";

import { sessionOptions } from "@/lib/iron-session";
import AppLayout from "@/components/layout/AppLayout";

const Dashboard: React.FC = (): JSX.Element => {
	return (
		<AppLayout>
			<div>Dashboard</div>
		</AppLayout>
	);
};

export const getServerSideProps: GetServerSideProps = withIronSession(
	async ({ req }) => {
		const user = req.session.get("user");
		if (!user) {
			return {
				redirect: {
					destination: "/auth/login",
					permanent: false,
				},
			};
		}

		return {
			props: { user },
		};
	},
	sessionOptions
);

export default Dashboard;
