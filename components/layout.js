import Header from "./header";
import { Container } from "@material-ui/core";

export default function Layout({ children, username, deleteCookie }) {
	return (
		<>
			<Header username={username || undefined} deleteCookie={deleteCookie} />
			<Container component="main" maxWidth="xs">
				{children}
			</Container>
		</>
	);
}
