import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Menu,
	MenuItem,
	Grid,
	Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./theme";

export default function Header(props) {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const logOut = () => {
		props.deleteCookie("name");
		props.deleteCookie("surname");
		props.deleteCookie("email");
	};

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Box my={3} width="100%">
						<Grid container xs justify="space-between" alignItems="center">
							<Link href="/">
								<a style={{ textDecoration: "none" }}>
									<Typography
										variant="h4"
										color="textPrimary"
										className={classes.navTitle}
									>
										TIME
									</Typography>
								</a>
							</Link>
							<div>
								<span>{props.username}</span>
							</div>
							<IconButton
								className={classes.navBurger}
								color="inherit"
								aria-controls="navbar-menu"
								aria-haspopup="true"
								onClick={handleClick}
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="navbar-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								{!props.username ? (
									<>
										<Link href="/account/login">
											<MenuItem onClick={handleClose}>Sign In</MenuItem>
										</Link>
										<Link href="/account/register">
											<MenuItem onClick={handleClose}>Sign Up</MenuItem>
										</Link>
									</>
								) : (
									<Link href="/">
										<MenuItem onClick={logOut}>Log Out</MenuItem>
									</Link>
								)}
							</Menu>
						</Grid>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
}
