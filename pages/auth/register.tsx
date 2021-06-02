import Head from "next/head";

import Layout from "@/components/layout/Page";
import AuthBackground from "@/components/auth/AuthBackground";
import RegisterForm from "@/components/auth/RegisterForm";

const Register: React.FC = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>{`${process.env.APP_NAME} - Register`}</title>
			</Head>
			<Layout>
				<div className="min-h-screen bg-red flex">
					<RegisterForm />
					<AuthBackground background="/images/auth/bg_register.png" />
				</div>
			</Layout>
		</>
	);
};

export default Register;
