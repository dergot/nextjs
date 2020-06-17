import Link from "next/link";
import { Home, SignIn, SignUp } from "../pages";

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
