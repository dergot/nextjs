import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
// import { getSortedPostsData } from "../lib/posts";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>I'm JavaScript based web developer</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{" "}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
				<p>
					<Link href="./posts/first-post">To Post Page</Link>
				</p>
			</section>
		</Layout>
	);
}

// export async function getStaticProps() {
// 	const allPostsData = getSortedPostsData()
// 	return {
// 		props: {
// 		allPostsData
// 	  	}
// 	}
// }
