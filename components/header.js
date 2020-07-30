import { Link } from "next";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Menu,
	MenuItem,
	CssBaseline,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./theme";

export default function Header() {
	const classes = useStyles();

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
				<Toolbar className={classes.navBar}>
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
						<Link href="/signin">
							<MenuItem onClick={handleClose}>
								<a style={{ textDecoration: "none" }}>Sign In</a>
							</MenuItem>
						</Link>
						<Link href="/signup">
							<MenuItem onClick={handleClose}>
								<a style={{ textDecoration: "none" }}>Sign Up</a>
							</MenuItem>
						</Link>
						<Link href="/about">
							<MenuItem onClick={handleClose}>
								<a style={{ textDecoration: "none" }}>About Us</a>
							</MenuItem>
						</Link>
					</Menu>
				</Toolbar>
			</AppBar>
		</>
	);
}
