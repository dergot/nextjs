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
