import Layout from "../../components/layout";
import { Typography } from "@material-ui/core";

export default function MyAccount() {
	return (
		<>
			<Layout>
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
					<Grid item xs={4}>
						<Link href="/">
							<a style={{ textDecoration: "none", textAlign: "center" }}>
								<Typography
									variant="h4"
									color="textPrimary"
									style={{
										borderStyle: "solid",
										borderColor: "#fff",
										borderWidth: "0.3rem",
										padding: "10px 20px",
										width: "fit-content",
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
			</Layout>
		</>
	);
}
