import { createMuiTheme } from "@material-ui/core/styles";
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
