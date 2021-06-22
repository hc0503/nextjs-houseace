import { Provider } from "react-redux";
import { AppProps } from "next/app";
import Head from "next/head";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import store from "../redux";

import "../styles/globals.css";

const App: React.FC<AppProps> = ({
	Component,
	pageProps,
}): JSX.Element => {
	const persistor = persistStore(store);

	return (
		<>
			<Head>
				<title>{`${process.env.APP_NAME}`}</title>
				<link rel="shortcut icon" href="/favicon.png" />
			</Head>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</>
	);
};

export default App;
