import Layout from "../components/layout";
import { Typography, Grid } from "@material-ui/core";
import fetch from "isomorphic-unfetch";
import { theme } from "../components/theme";
import { useRouter } from "next/router";

const MyAccount = (data) => {
	const router = useRouter();
	if (data.person.authToken == undefined && typeof window !== "undefined") {
		router.replace("/account/login");
	}
	return (
		<>
			<Layout>
				<Grid
					container
					justify="center"
					alignItems="center"
					alignContent="center"
					style={{ marginTop: theme.spacing(10) }}
				>
					<Grid item xs="auto">
						<Typography variant="h6" color="textPrimary">
							Welcome {data.person.name} {data.person.surname}!
						</Typography>
					</Grid>
				</Grid>
			</Layout>
		</>
	);
};

export default MyAccount;

export async function getServerSideProps(context) {
	const cookie = context.req.headers.cookie;

	const resp = await fetch(`https://nextjs.legantos.now.sh/api/session`, {
		method: "GET",
		headers: { "Content-Type": "application/json", cookie: cookie },
		credentials: "include",
	});
	const json = await resp.json();
	const data = {
		person: json,
		url: json.authToken ? "/" : null,
	};
	return { props: { ...data } };
}
