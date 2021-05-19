import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { Provider as AuthProvider } from "next-auth/client";

import store from "../redux";

import "tailwindcss/tailwind.css";

const App: React.FC<AppProps> = ({
	Component,
	pageProps,
}): JSX.Element => {
	return (
		<Provider store={store}>
			{/* <AuthProvider session={pageProps.session}> */}
			<Component {...pageProps} />
			{/* </AuthProvider> */}
		</Provider>
	);
};

export default App;
