import Link from "next/link";

export default function Header() {
	return (
		<div>
			<Link href="/">
				<a>Time</a>
			</Link>
			<Link href="../pages/signIn">
				<a>sign in</a>
			</Link>
			<Link href="../pages/signUp">
				<a>sign up</a>
			</Link>
		</div>
	);
}
