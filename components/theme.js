import { createMuiTheme } from "@material-ui/core/styles";
import { red, grey } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: grey[900],
		},
		secondary: {
			main: grey[900],
		},
		error: {
			main: red.A400,
		},
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				body: {
					backgroundImage: "url(https://images.app.goo.gl/8Dfd3TwKvALWMUbq6)",
				},
			},
		},
	},
});

export default theme;
