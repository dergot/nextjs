import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import { TextField, Button, Grid, Typography } from "@material-ui/core";

export default function Login() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle} | Sign In</title>
			</Head>
			<Typography variant="body1" color="textPrimary">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
				sagittis, metus quis consequat vestibulum, tellus quam eleifend ipsum,
				ac consequat.
			</Typography>
			<Grid container justify="center" alignItems="stretch" xs spacing={2}>
				<Grid item xs>
					<TextField
						variant="outlined"
						required
						fullWidth
						id="tel"
						label="Phone Number"
						name="tel"
						type="tel"
						color="secondary"
					></TextField>
				</Grid>
				<Grid item xs="auto">
					<Button
						style={{ height: "100%" }}
						type="submit"
						variant="contained"
						color="secondary"
					>
						Send!
					</Button>
				</Grid>
			</Grid>
		</Layout>
	);
}
