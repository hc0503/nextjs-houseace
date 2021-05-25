import Layout from "@/components/layout/Page";
import AuthBackground from "@/components/auth/AuthBackground";
import LoginForm from "@/components/auth/LoginForm";

export default function Example() {
	return (
		<Layout>
			<div className="min-h-screen bg-red flex">
				<LoginForm />
				<AuthBackground
					background="/images/auth/bg_login.png"
					alt="Login background"
				/>
			</div>
		</Layout>
	);
}
