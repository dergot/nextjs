import React from "react";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Head from "next/head";
import { Typography, TextField, Button, Grid } from "@material-ui/core";
import { useStyles } from "../components/theme";

export default function SignUp() {
	const classes = useStyles();

	return (
		<Layout>
			<Head>
				<title>{siteTitle} | Sign Up</title>
			</Head>
			<Typography variant="h1">Sign Up!</Typography>
			<form className={classes.form} noValidate>
				<TextField
					variant="outlined"
					margin="normal"
					required
					id="firstName"
					label="First Name"
					name="firstName"
					autoFocus
					type="text"
					color="secondary"
				></TextField>
				<TextField
					variant="outlined"
					margin="normal"
					required
					id="secondName"
					label="Second Name"
					name="secondName"
					autoFocus
					type="text"
					color="secondary"
				></TextField>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="tel"
					label="Phone Number"
					name="tel"
					autoComplete="tel"
					autoFocus
					type="tel"
					color="secondary"
				></TextField>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					autoComplete="current-password"
					color="secondary"
				></TextField>
				<Button
					type="submit"
					fullWidth
					variant="outlined"
					color="secondary"
					className={classes.submit}
				>
					Sign In
				</Button>
				<Grid container>
					<Grid item xs>
						<Link href="#">
							<a>Forgot password?</a>
						</Link>
					</Grid>
					<Grid item>
						<Link href="/signup">
							<a>Don't have an account? Sign Up</a>
						</Link>
					</Grid>
				</Grid>
			</form>
		</Layout>
	);
}
