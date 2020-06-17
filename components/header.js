import Link from "next/link";
import Home from "../pages";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";

export default function Header() {
	return (
		<div>
			<Link href={Home}>
				<a>Time</a>
			</Link>
			<Link href={SignIn}>
				<a>sign in</a>
			</Link>
			<Link href={SignUp}>
				<a>sign up</a>
			</Link>
		</div>
	);
}
