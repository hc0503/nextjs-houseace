import { useSession, signIn, signOut } from "next-auth/client";
import NavBar from "@/components/landing/NavBar";

const Landing: React.FC = (): JSX.Element => {
	const [session, loading] = useSession();
	if (session) {
		return (
			<>
				<NavBar />
				<div>
					Hello, {session.user?.email ?? session.user?.name} ||{" "}
					<button onClick={() => signOut()}>Sign out</button>
				</div>
			</>
		);
	} else {
		return (
			<>
				<NavBar />
				<div>
					You are not logged in! <br />
					<button onClick={() => signIn()}>Sign in</button>
				</div>
			</>
		);
	}
};

export default Landing;
