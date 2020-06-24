import Head from "next/head";
import Link from "next/link";
import CssBaseline from "@material-ui/core/CssBaseline";

export const siteTitle = "TIME - social networking service.";

export default function Layout({ children }) {
	return (
		<>
			<CssBaseline />
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<title>{siteTitle}</title>
			</Head>
			<header>
				<Link href="/">
					<a>TIME</a>
				</Link>
				<Link href="/signin">
					<a>Sign In</a>
				</Link>
				<Link href="/signup">
					<a>Sign Up</a>
				</Link>
			</header>
			<main>{children}</main>
		</>
	);
}
