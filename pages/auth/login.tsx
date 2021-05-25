import Layout from "@/components/layout/Page";
import AuthBackground from "@/components/auth/AuthBackground";
import AuthForm from "@/components/auth/AuthForm";

export default function Example() {
	return (
		<Layout>
			<div className="min-h-screen bg-red flex">
				<AuthForm />
				<AuthBackground />
			</div>
		</Layout>
	);
}
