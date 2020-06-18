import Layout, { siteTitle } from "./components/layout";
import Head from "next/head";

export default function SignIn() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle} Sign Up</title>
			</Head>
		</Layout>
	);
}
