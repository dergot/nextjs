import Layout from "../components/layout";
import { Typography } from "@material-ui/core";
import { useStyles } from "../components/theme";

export default function Home() {
	const classes = useStyles();

	return (
		<Layout>
			<Typography variant="h4" className={classes.featuredTitle}>
				Welcome to TIME
			</Typography>
			<br />
			<Typography variant="body1" className={classes.featuredDescription}>
				The first in the world social networking service with
				<br />
				making money ability!
			</Typography>
			<br />
			<Typography variant="subtitle1" className={classes.featuredSubtitle}>
				Press <strong>"Sign Up"</strong> button to create your account!
			</Typography>
		</Layout>
	);
}
