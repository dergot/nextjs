import Link from "next/link";

export default function Header() {
	return (
		<div>
			<Link href="/">
				<a>Time</a>
			</Link>
			<Link href="/">
				<a>sign in</a>
			</Link>
			<Link href="/">
				<a>sign up</a>
			</Link>
		</div>
	);
}
