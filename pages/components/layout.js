import Head from "next/head";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";

export const siteTitle = "TIME - social networking service.";

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<title>{siteTitle}</title>
			</Head>
			<header>
				<Navbar fixed="top" bg="dark">
					<NavbarToggle />
					<FontAwesomeIcon icon={faBars} className="navbar_menu" />
					<Navbar.Brand href="/" className="navbar_logo">
						TIME
					</Navbar.Brand>
					<Nav variant="tabs" className="navbar_buttons">
						<Nav.Item>
							<Nav.Link
								href="../pages/signin"
								className="navbar_buttons_signIn"
							>
								Sign In
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								href="../pages/signup"
								className="navbar_buttons_signUp"
							>
								Sign Up
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar>
			</header>
			{children}
		</>
	);
}
