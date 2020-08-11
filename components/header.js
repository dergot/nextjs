import React from "react";
import Link from "next/link";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Menu,
	MenuItem,
	Grid,
} from "@material-ui/core";
import {
	Menu as MenuIcon,
	AccountCircle,
	AccountBalanceWallet,
} from "@material-ui/icons";

export default function Header(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					{props.username ? (
						<Grid container>
							<Grid item xs={4}>
								<IconButton
									color="inherit"
									aria-controls="navbar-menu"
									aria-haspopup="true"
									onClick={handleClick}
								>
									<MenuIcon />
								</IconButton>
								<Menu
									anchorEl={anchorEl}
									keepMounted
									open={Boolean(anchorEl)}
									onClose={handleClose}
								>
									<MenuItem>
										<AccountCircle />
										<Typography variant="body1" color="textPrimary">
											{props.username}
										</Typography>
									</MenuItem>
									<Link href="/account/myaccount">
										<MenuItem onClick={handleClose}>My Account</MenuItem>
									</Link>
									<Link href="/">
										<MenuItem
											onClick={() => {
												logOut();
												handleClose();
											}}
										>
											Log Out
										</MenuItem>
									</Link>
								</Menu>
							</Grid>
							<Grid item xs="auto">
								<Link href="/">
									<a style={{ textDecoration: "none" }}>
										<Typography
											variant="h4"
											color="textPrimary"
											style={{
												borderStyle: "solid",
												borderColor: "#fff",
												borderWidth: "0.3rem",
												padding: "10px 20px",
												textAlign: "center",
											}}
										>
											TIME
										</Typography>
									</a>
								</Link>
							</Grid>
							<Grid item xs={4}>
								<Typography variant="h6" color="textPrimary">
									<AccountBalanceWallet />
									$10
								</Typography>
							</Grid>
						</Grid>
					) : (
						<Grid
							container
							justify="center"
							alignItems="center"
							alignContent="center"
						>
							<Grid item xs="auto">
								<Link href="/">
									<a style={{ textDecoration: "none" }}>
										<Typography
											variant="h4"
											color="textPrimary"
											style={{
												borderStyle: "solid",
												borderColor: "#fff",
												borderWidth: "0.3rem",
												padding: "10px 20px",
												textAlign: "center",
												margin: "20px 0",
											}}
										>
											TIME
										</Typography>
									</a>
								</Link>
							</Grid>
						</Grid>
					)}
				</Toolbar>
			</AppBar>
		</>
	);
}
