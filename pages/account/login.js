import Layout from "../../components/layout";
import Link from "next/link";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import fetch from "isomorphic-unfetch";
import { theme } from "../../components/theme";
import { useRouter } from "next/router";

const Login = (data) => {
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
		email: undefined,
		password: undefined,
	};

	async function loginUser() {
		const { email, password } = result;
		if (!email || !password) {
			alert("Fil arr required fields!");
			return;
		}

		await fetch("/api/login", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(result),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				if (data.correct) {
					window.location.replace(data.url);
				} else {
					alert(data.message);
				}
			});
	}

	return (
		<>
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
		</>
	);
};

export default Login;

export async function getServerSideProps(context) {
	const cookie = context.req.headers.cookie;

	const resp = await fetch(
		`https://nextjs-swart-delta.now.sh/api/session?${cookie}`,
		{
			method: "GET",
		}
	);
	const json = await resp.json();
	const data = {
		person: json,
		url: json.authToken ? "/" : null,
	};
	return { props: { ...data } };
}
