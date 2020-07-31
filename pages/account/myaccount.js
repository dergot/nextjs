import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import { Typography } from "@material-ui/core";

export default function MyAccount() {
	return (
		<>
			<Layout>
				<Head>
					<title>{siteTitle} | My Account</title>
				</Head>
				<Typography variant="body1" color="textPrimary">
					My Account!
				</Typography>
			</Layout>
		</>
	);
}
