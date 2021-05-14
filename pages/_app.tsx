import { Provider } from "react-redux";
import { AppProps } from "next/app";

import store from "../redux";

import "tailwindcss/tailwind.css";

const App: React.FC<AppProps> = ({
	Component,
	pageProps,
}): JSX.Element => {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
};

export default App;
