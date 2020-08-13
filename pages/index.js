import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/layout";
import Link from "next/link";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import fetch from "isomorphic-unfetch";
import { theme } from "../components/theme";

const Login = ({ data }) => {
	const result = {
		name: undefined,
		surname: undefined,
		phone: undefined,
		email: undefined,
		password: undefined,
		repeatedPassword: undefined,
	};

	const [message, setMessage] = useState(null);

	async function loginUser() {
		const { email, password } = result;
		if (!email || !password) {
			alert("Fil arr required fields!");
			return;
		}

		const resp = await fetch("/api/auth", {
			method: "PUT",
			// headers: {
			// 	"Content-Type": "application/json",
			// },
			body: JSON.stringify(result),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				window.location.href = data.url;
			});
	}

	return (
		<Layout>
			<form style={{ width: "100%", marginTop: theme.spacing(1) }} noValidate>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					label="E-mail"
					type="email"
					color="secondary"
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
					color="secondary"
					onChange={(event) => {
						result.password = event.target.value;
					}}
				/>
				<Grid
					container
					justify="space-between"
					alignItems="center"
					alignContent="center"
					style={{ marginTop: theme.spacing(2) }}
				>
					<Grid item xs={5}>
						<Link href="/account/reset">
							<a style={{ textDecoration: "none" }}>
								<Typography color="textPrimary">Forgot password?</Typography>
							</a>
						</Link>
					</Grid>
					<Grid item xs={5}>
						<Button
							fullWidth
							type="button"
							variant="contained"
							color="secondary"
							onClick={loginUser}
						>
							Sign In
						</Button>
					</Grid>
				</Grid>
				<Grid
					container
					justify="center"
					alignItems="center"
					alignContent="center"
					style={{ marginTop: theme.spacing(3) }}
				>
					<Grid item xs={12}>
						<Link href="/account/register">
							<Button
								fullWidth
								type="button"
								variant="contained"
								color="secondary"
							>
								Register
							</Button>
						</Link>
					</Grid>
				</Grid>
			</form>
		</Layout>
	);
};

export default Login;
