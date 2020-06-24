import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle, children } from "./components/layout";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle} Homepage</title>
			</Head>
			<h1 className="main-title">Welcome to TIME</h1>
			<p className="main-description">
				The first in the world social networking service with
			</p>
			<p className="main-description-bold">making money ability</p>
			<Link href="#">
				<a className="main-link">About Us</a>
			</Link>
		</Layout>
	);
}
