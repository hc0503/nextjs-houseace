import { Provider } from "react-redux";
import { AppProps } from "next/app";
import Head from "next/head";
import { Provider as AuthProvider } from "next-auth/client";

import store from "../redux";

import "tailwindcss/tailwind.css";

const App: React.FC<AppProps> = ({
	Component,
	pageProps,
}): JSX.Element => {
	return (
		<>
			<Head>
				<title>{`${process.env.APP_NAME}`}</title>
			</Head>
			<Provider store={store}>
				{/* <AuthProvider session={pageProps.session}> */}
				<Component {...pageProps} />
				{/* </AuthProvider> */}
			</Provider>
		</>
	);
};

export default App;
