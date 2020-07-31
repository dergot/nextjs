import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./header";
import { theme, useStyles } from "./theme";
import { Container, CssBaseline } from "@material-ui/core";

export const siteTitle = "TIME - social networking service";

export default function Layout({ children, username, deleteCookie }) {
	const classes = useStyles();

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<title>{siteTitle}</title>
			</Head>
			<ThemeProvider theme={theme}>
				<Header username={username || undefined} deleteCookie={deleteCookie} />
				<Container component="main" maxWidth="xs">
					{children}
				</Container>
			</ThemeProvider>
			<CssBaseline />
		</>
	);
}
