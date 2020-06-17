import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";

export default function SignUp() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle} Sign Un</title>
			</Head>
		</Layout>
	);
}
