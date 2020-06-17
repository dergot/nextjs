import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
	root: {
		justifyContent: "space-between",
	},
	menuButton: {
		fontSize: "20px",
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

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div>
			<AppBar position="static">
				<Toolbar className={classes.root}>
					<IconButton
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						TIME
					</Typography>
					<Button className={classes.menuButton} color="inherit">
						Login
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
