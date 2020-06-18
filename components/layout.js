import "react";
import "react-dom";
import Head from "next/head";
import MenuIcon from "@material-ui/icons/Menu";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import {
	ButtonGroup,
	IconButton,
	Button,
	Typography,
	Toolbar,
	AppBar,
	CssBaseline,
	CardMedia,
} from "@material-ui/core";
import theme from "./theme";
import { grey } from "@material-ui/core/colors";

export const siteTitle = "TIME - social networking service.";

const useStyles = makeStyles((theme) => ({
	root: { color: grey[900] },
	navbar: {
		justifyContent: "space-between",
	},
	menuButton: {
		fontSize: "20px",
		color: "white",
		borderColor: "white",
	},
	title: {
		padding: "5px 15px",
		margin: "20px 0",
		fontSize: "25px",
		border: "5px",
		borderColor: "#fff",
		borderStyle: "solid",
		textAlign: "center",
	},
}));

export default function Layout({ children }) {
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
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<div className={classes.root}>
					<AppBar position="static">
						<Toolbar className={classes.navbar}>
							<IconButton className={classes.menuButton} aria-label="menu">
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" className={classes.title}>
								TIME
							</Typography>
							<ButtonGroup>
								<Button className={classes.menuButton}>Sign In</Button>
								<Button className={classes.menuButton}>Sign Up</Button>
							</ButtonGroup>
						</Toolbar>
					</AppBar>
				</div>
				{children}
			</ThemeProvider>
		</>
	);
}
