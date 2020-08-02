import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import fetch from "isomorphic-unfetch";
import { theme } from "../components/theme";

const user = {
	name: undefined,
	surrname: undefined,
};

var getCookie = (name) => name;

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
}

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

function deleteCookie(name) {
	setCookie(name, "", {
		"max-age": -1,
	});
}

export default function Home({ data }) {
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
		<Layout
			username={
				getCookie("name") && getCookie("surname")
					? `${getCookie("name")} ${getCookie("surname")}`
					: undefined
			}
			deleteCookie={deleteCookie}
		>
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
}
