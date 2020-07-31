import Layout from "../components/layout";
import { Typography } from "@material-ui/core";
import { useStyles } from "../components/theme";

const user = {
	name: undefined,
	surrname: undefined,
};

var getCookie = (name) => name;

if (typeof document !== "undefined") {
	getCookie = (name) => {
		let matches = document.cookie.match(
			new RegExp(
				"(?:^|; )" +
					name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
					"=([^;]*)"
			)
		);
		return matches ? decodeURIComponent(matches[1]) : undefined;
	};
}

function setCookie(name, value, options = {}) {
	options = {
		path: "/",
		// при необходимости добавьте другие значения по умолчанию
		...options,
	};

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString();
	}

	let updatedCookie =
		encodeURIComponent(name) + "=" + encodeURIComponent(value);

	for (let optionKey in options) {
		updatedCookie += "; " + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += "=" + optionValue;
		}
	}

	document.cookie = updatedCookie;
}

function deleteCookie(name) {
	setCookie(name, "", {
		"max-age": -1,
	});
}

export default function Home() {
	const classes = useStyles();

	return (
		<Layout
			username={
				getCookie("name") && getCookie("surname")
					? `${getCookie("name")} ${getCookie("surname")}`
					: undefined
			}
			deleteCookie={deleteCookie}
		>
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
