import Head from "next/head";
import { GetServerSideProps } from "next";
import { withIronSession } from "next-iron-session";

import { sessionOptions } from "@/lib/iron-session";
import AppLayout from "@/components/layout/AppLayout";
import AccountTab from "@/components/app/Account/AccountTab";

const Account: React.FC = (): JSX.Element => {
	return (
		<AppLayout>
			<Head>
				<title>{`${process.env.APP_NAME} - Account`}</title>
			</Head>
			<AccountTab />
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

export default Account;
