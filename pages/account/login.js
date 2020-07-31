import React, { useState, useEffect } from "react";
import Layout, { siteTitle } from "../../components/layout";
import Link from "next/link";
import Head from "next/head";
import { TextField, Button, Grid, Typography, Input } from "@material-ui/core";
import { useStyles } from "../../components/theme";
import fetch from "isomorphic-unfetch";

function setCookie(name, value, options = {}) {
	options = {
		path: "/",
		// при необходимости добавьте другие значения по умолчанию
		...options,
	};

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString();
	}

	let updatedCookie =
		encodeURIComponent(name) + "=" + encodeURIComponent(value);

	for (let optionKey in options) {
		updatedCookie += "; " + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += "=" + optionValue;
		}
	}

	document.cookie = updatedCookie;
}

var getCookie = (name) => name;
var redirect = (url) => url;

if (typeof document !== "undefined") {
	getCookie = (name) => {
		let matches = document.cookie.match(
			new RegExp(
				"(?:^|; )" +
					name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
					"=([^;]*)"
			)
		);
		return matches ? decodeURIComponent(matches[1]) : undefined;
	};

	redirect = (url) => {
		window.location.href = "/";
	};
}

if (getCookie("name") && getCookie("surname")) {
	redirect("/");
}

const Login = ({ data }) => {
	if (getCookie("name") && getCookie("surname")) {
		redirect("/");
	}
	const classes = useStyles();
	const result = {
		name: undefined,
		surname: undefined,
		phone: undefined,
		email: undefined,
		password: undefined,
		repeatedPassword: undefined,
	};

	const loginUser = () => {
		const { email, password } = result;
		if (!email || !password) {
			alert("Fil arr required fields!");
			return;
		}
		fetch("/api/login", {
			method: "PUT",
			body: JSON.stringify(result),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				//document.cookie = `name=${data.info.name}; surname=${data.info.surname}; email=${data.info.email}; path=/`;
				setCookie("name", data.info.name);
				setCookie("surname", data.info.surname);
				setCookie("email", data.info.email);
				window.location.href = data.url;
			});
	};

	return (
		<Layout>
			<Head>
				<title>{siteTitle} | Sign In</title>
			</Head>
			<form className={classes.form} noValidate>
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
				<Grid container justify="space-evenly" alignItems="center">
					<Grid item xs={4}>
						<Link href="/account/reset">
							<a style={{ textDecoration: "none" }}>
								<Typography style={{ textAlign: "center" }} color="textPrimary">
									Forgot password?
								</Typography>
							</a>
						</Link>
					</Grid>
					<Grid item xs={4}>
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
			</form>
		</Layout>
	);
};

export default Login;