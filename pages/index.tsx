import { GetServerSideProps } from "next";
import { withIronSession } from "next-iron-session";

import { sessionOptions } from "@/lib/iron-session";
import NavBar from "@/components/landing/nav/NavBar";
import Background from "@/components/landing/banner/Background";
import Banner from "@/components/landing/banner/Banner";
import Introduce from "@/components/landing/introduce/Introduce";
import GettingDone from "@/components/landing/gettingdone/GettingDone";
import Popular from "@/components/landing/popular/Popular";
import HowWorks from "@/components/landing/howworks/HowWorks";
import Renovation from "@/components/landing/renovation/Renovation";

interface Props {
	user?: any;
}

const Landing: React.FC<Props> = ({ user }): JSX.Element => {
	return (
		<>
			<Background
				src="url(/images/landing/banner.png)"
				height="800px"
			>
				<NavBar />
				<Banner />
			</Background>
			<div className="container mx-auto">
				<Introduce />
				<div className="mt-36">
					<GettingDone />
				</div>
				<div className="mt-36">
					<Popular />
				</div>
				<div className="mt-36">
					<HowWorks />
				</div>
				<div className="mt-36">
					<Renovation />
				</div>
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
