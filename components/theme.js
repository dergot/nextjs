import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const theme = createMuiTheme({
	palette: {
		type: "dark",
		primary: {
			main: grey[900],
		},
		secondary: {
			main: grey[50],
		},
		info: {
			main: grey[900],
		},
	},
});

export const useStyles = makeStyles((theme) => ({
	navBar: {
		margin: theme.spacing(3, 0),
	},
	// navBar: {
	// 	padding: "1.5rem",
	// 	justifyContent: "space-between",
	// },
	navBurger: {},
	navTitle: {
		borderStyle: "solid",
		borderColor: "#fff",
		borderWidth: "0.3rem",
		padding: "10px",
	},
	navButton: {
		padding: "15px",
	},
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0),
	},
}));
