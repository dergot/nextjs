import Layout from "../../components/layout";
import { TextField, Button, Grid } from "@material-ui/core";
import fetch from "isomorphic-unfetch";
import { theme } from "../../components/theme";
import { useRouter } from "next/router";

export default function Home(data) {
	const router = useRouter();

	if (data.person.authToken !== undefined && typeof window !== "undefined") {
		router.replace(data.url);
		return (
			<>
				<Grid
					container
					justify="center"
					alignContent="center"
					alignItems="center"
					style={{ marginTop: theme.spacing(10) }}
				>
					<Grid item xs="auto">
						<Typography variant="h6" color="textPrimary">
							Successfully Logged In! Redirecting...
						</Typography>
					</Grid>
				</Grid>
			</>
		);
	}

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
			alert("Fill All Required Fields!");
			return;
		}
		fetch("/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(result),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				router.push(data.url);
			});
	};
	return (
		<Layout>
			<form style={{ width: "100%", marginTop: theme.spacing(1) }}>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							label="First Name"
							type="text"
							color="secondary"
							value={result.name}
							onChange={(event) => {
								result.name = event.target.value;
							}}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
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
					value={result.phone}
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
					value={result.email}
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
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					label="Repeat password"
					type="password"
					color="secondary"
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
