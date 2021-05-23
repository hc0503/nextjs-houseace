import NavBar from "@/components/landing/NavBar";

const Landing: React.FC = (): JSX.Element => {
	const session = false;
	if (session) {
		return (
			<>
				<NavBar />
			</>
		);
	} else {
		return (
			<>
				<NavBar />
			</>
		);
	}
};

export default Landing;
