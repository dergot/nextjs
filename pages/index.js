import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle} Homepage</title>
			</Head>
			<section>
				<h1>Welcome to TIME</h1>
				<p>
					The first in the world social networking service with
					<p>making money ability</p>
				</p>
				<p>
					<a href="#">About Us</a>
				</p>
			</section>
		</Layout>
	);
}
