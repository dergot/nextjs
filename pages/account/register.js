import React, { useState, useEffect } from "react";
import Layout, { siteTitle } from "../../components/layout";
import Link from "next/link";
import Head from "next/head";
import { TextField, Button, Grid, Typography, Input } from "@material-ui/core";
import { useStyles } from "../../components/theme";
import fetch from "isomorphic-unfetch";

const Register = ({ data }) => {
	const classes = useStyles();
	const result = {
		name: undefined,
		surname: undefined,
		phone: undefined,
		email: undefined,
		password: undefined,
		repeatedPassword: undefined,
	};

	const registerUser = () => {
		const { name, surname, phone, email, password, repeatedPassword } = result;
		if (
			!name ||
			!surname ||
			!phone ||
			!email ||
			!password ||
			password !== repeatedPassword
		) {
			alert("Fil arr required fields!");
			return;
		}
		fetch("http://localhost:3000/api/register", {
			method: "POST",
			body: JSON.stringify(result),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				window.location.href = data.url;
			});
	};

	return (
		<Layout>
			<Head>
				<title>{siteTitle} | Sign In</title>
			</Head>
			<form className={classes.form} noValidate>
				<Grid container spacing={2}>
					<Grid item xs>
						<TextField
							variant="outlined"
							margin="normal"
							required
							label="First Name"
							autoFocus
							type="text"
							color="secondary"
							value={result.name}
							onChange={(event) => {
								result.name = event.target.value;
							}}
						/>
					</Grid>
					<Grid item xs>
						<TextField
							variant="outlined"
							margin="normal"
							required
							label="Second Name"
							autoFocus
							type="text"
							color="secondary"
							value={result.surname}
							onChange={(event) => {
								result.surname = event.target.value;
							}}
						/>
					</Grid>
				</Grid>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					label="Phone Number"
					autoComplete="tel"
					autoFocus
					type="tel"
					color="secondary"
					value={result.name}
					onChange={(event) => {
						result.phone = event.target.value;
					}}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					label="E-mail"
					type="email"
					autoComplete="current-password"
					color="secondary"
					value={result.name}
					onChange={(event) => {
						result.email = event.target.value;
					}}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					label="Password"
					type="password"
					autoComplete="current-password"
					color="secondary"
					value={result.name}
					onChange={(event) => {
						result.password = event.target.value;
					}}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					label="Repeat password"
					type="password"
					autoComplete="current-password"
					color="secondary"
					value={result.name}
					onChange={(event) => {
						result.repeatedPassword = event.target.value;
					}}
				/>
				<Grid container justify="space-evenly" alignItems="center">
					<Grid item xs>
						<Button
							fullWidth
							type="button"
							variant="contained"
							color="secondary"
							onClick={() => {
								registerUser();
							}}
						>
							Sign Up
						</Button>
					</Grid>
				</Grid>
			</form>
		</Layout>
	);
};

export default Register;

/*import Layout, { siteTitle } from "../../components/layout";
import Link from "next/link";
import Head from "next/head";
import { TextField, Button, Grid } from "@material-ui/core";
import { useStyles } from "../../components/theme";

export default function Register() {
	const classes = useStyles();

	return (
		<Layout>
			<Head>
				<title>{siteTitle} | Sign Up</title>
			</Head>
			<form className={classes.form} noValidate>
				<Grid container spacing={2}>
					<Grid item xs>
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
					</Grid>
					<Grid item xs>
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
					</Grid>
				</Grid>
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
					Sign Up
				</Button>
				<Grid container>
					<Grid item xs>
						<Link href="#">
							<a style={{ textDecoration: "none" }}>Forgot password?</a>
						</Link>
					</Grid>
					<Grid item xs>
						<Link href="/signup">
							<a style={{ textDecoration: "none" }}>
								Don't have an account? Sign Up
							</a>
						</Link>
					</Grid>
				</Grid>
			</form>
		</Layout>
	);
}
*/
