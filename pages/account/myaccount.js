import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import { Typography } from "@material-ui/core";

export default function MyAccount() {
	return (
		<>
			<Layout>
				<Head>
					<title>{siteTitle} | My Account</title>
				</Head>
				<Typography variant="h4" color="textPrimary">
					My Account!
				</Typography>
			</Layout>
		</>
	);
}
