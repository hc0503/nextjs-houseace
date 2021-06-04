import { GetServerSideProps } from "next";
import Head from "next/head";
import { withIronSession } from "next-iron-session";

import { sessionOptions } from "@/lib/iron-session";
import NavBar from "@/components/landing/nav/NavBar";
import Hero from "@/components/landing/hero/Hero";
import Introduce from "@/components/landing/introduce/Introduce";
import GettingDone from "@/components/landing/gettingdone/GettingDone";
import Popular from "@/components/landing/popular/Popular";
import HowWorks from "@/components/landing/howworks/HowWorks";
import Renovation from "@/components/landing/renovation/Renovation";
import Faq from "@/components/landing/faq/Faq";
import Article from "@/components/landing/article/Article";
import Footer from "@/components/landing/footer/Footer";

interface Props {
	user?: any;
}

const Landing: React.FC<Props> = ({ user }): JSX.Element => {
	return (
		<>
			<Head>
				<title>{`${process.env.APP_NAME} - Landing`}</title>
			</Head>
			<div className="bg-hero-pattern bg-no-repeat bg-cover h-screen">
				<NavBar />
				<Hero />
			</div>
			<div className="md:px-16 px-2">
				<Introduce />
			</div>
			<div className="mt-36">
				<GettingDone />
			</div>
			<div className="md:px-16 px-2">
				<div className="mt-36">
					<Popular />
				</div>
				<div className="mt-36">
					<HowWorks />
				</div>
				<div className="mt-36">
					<Renovation />
				</div>
				<div className="mt-36">
					<Faq />
				</div>
				<div className="mt-36">
					<Article />
				</div>
			</div>
			<div className="mt-36">
				<Footer />
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
