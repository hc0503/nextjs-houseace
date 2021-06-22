import Head from "next/head";

import Layout from "../../components/layout/Page";
import AuthBackground from "../../components/auth/AuthBackground";
import LoginForm from "../../components/auth/LoginForm";

const Login: React.FC = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>{`${process.env.APP_NAME} - Login`}</title>
			</Head>
			<Layout>
				<div className="min-h-screen bg-red flex">
					<LoginForm />
					<AuthBackground
						background="/images/auth/bg_login.png"
						alt="Login background"
					/>
				</div>
			</Layout>
		</>
	);
};

export default Login;
