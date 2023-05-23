// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="">
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</div>
	);
}

export default MyApp;
