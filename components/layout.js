import Head from "next/head";
import Header from "./header";
import { Container } from "@material-ui/core";

export const siteTitle = "TIME - social networking service";

export default function Layout({ children, username, deleteCookie }) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<title>{siteTitle}</title>
			</Head>
			<Header username={username || undefined} deleteCookie={deleteCookie} />
			<Container component="main" maxWidth="xs">
				{children}
			</Container>
		</>
	);
}
