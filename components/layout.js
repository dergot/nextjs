import Head from "next/head";
import Header from "./header";

export const siteTitle = "TIME - social networking service.";

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<title>{siteTitle}</title>
			</Head>
			<Header />
			{children}
		</>
	);
}
