import { GetServerSideProps } from "next";
import { withIronSession } from "next-iron-session";

import { sessionOptions } from "@/lib/iron-session";
import NavBar from "@/components/landing/nav/NavBar";

interface Props {
	user?: any;
}
const Landing: React.FC<Props> = ({ user }): JSX.Element => {
	return (
		<>
			<div
				style={{
					backgroundImage: "url(/images/landing/banner.png)",
					height: "800px",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			>
				<NavBar />
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = withIronSession(
	async ({ req }) => {
		const user = req.session.get("user");
		if (!user) {
			return {
				props: {},
			};
		}
		return {
			props: { user },
		};
	},
	sessionOptions
);

export default Landing;
