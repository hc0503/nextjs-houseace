import { GetServerSideProps } from "next";
import Head from "next/head";
import { withIronSession } from "next-iron-session";

import { sessionOptions } from "@/lib/iron-session";
import NavBar from "@/components/landing/NavBar/NavBar";
import Hero from "@/components/landing/Hero/Hero";
import Introduce from "@/components/landing/Introduce/Introduce";
import GettingDone from "@/components/landing/GettingDone/GettingDone";
import Popular from "@/components/landing/Popular/Popular";
import HowItWorks from "@/components/landing/HowItWorks/HowItWorks";
import Renovation from "@/components/landing/Renovation/Renovation";
import Faq from "@/components/landing/FAQ/Faq";
import ArticleGuide from "@/components/landing/ArticleGuide/ArticleGuide";
import Footer from "@/components/landing/Footer/Footer";

interface Props {
	user?: any;
}

const Landing: React.FC<Props> = (): JSX.Element => {
	return (
		<div className="text-gray-dark">
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
					<HowItWorks />
				</div>
				<div className="mt-36">
					<Renovation />
				</div>
				<div className="mt-36">
					<Faq />
				</div>
				<div className="mt-36">
					<ArticleGuide />
				</div>
			</div>
			<div className="mt-36">
				<Footer />
			</div>
		</div>
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
