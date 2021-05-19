import { GetServerSideProps } from "next";
import {
	getSession,
	signIn,
	signOut,
	useSession,
} from "next-auth/client";
import NavBar from "../components/landing/NavBar";

const Landing = ({ session }) => {
	if (session) {
		return (
			<>
				<NavBar />
				<div>
					Hello, {session.user?.email ?? session.user?.name} ||{" "}
					{session.user?.password} <br />
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

export const getServerSideProps: GetServerSideProps = async (
	context
) => {
	const session = await getSession(context);
	return {
		props: { session },
	};
};
export default Landing;
