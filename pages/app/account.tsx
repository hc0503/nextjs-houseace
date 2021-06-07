import Head from "next/head";

import AppLayout from "@/components/layout/AppLayout";
import AccountTab from "@/components/app/Account/AccountTab";

const Account: React.FC = (): JSX.Element => {
	return (
		<AppLayout>
			<Head>
				<title>{`${process.env.APP_NAME} - Account`}</title>
			</Head>
			<AccountTab />
			<main className="flex-1 relative overflow-y-auto focus:outline-none bg-white shadow rounded-2xl m-2"></main>
		</AppLayout>
	);
};

export default Account;
