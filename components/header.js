import Link from "next/link";
import Button from "@material-ui/core/Button";

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
