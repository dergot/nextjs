import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { TextField, Button, Grid } from "@material-ui/core";
import fetch from "isomorphic-unfetch";
import { theme } from "../../components/theme";

const Register = ({ data }) => {
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
		fetch("/api/register", {
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
			<form style={{ width: "100%", marginTop: theme.spacing(1) }} noValidate>
				<Grid container spacing={2}>
					<Grid item xs>
						<TextField
							variant="outlined"
							margin="normal"
							required
							label="First Name"
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
