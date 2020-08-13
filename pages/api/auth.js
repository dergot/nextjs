import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { ObjectID } from "mongodb";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { Secret } from "../../api/secret";
import cookie from "cookie";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
	let request = req;
	let data = req.body;
	data = JSON.parse(data);

	hash(data.password, 12, async function (err, hash) {
		delete data.repeatedPassword;
		let person = await request.db
			.collection("users")
			.insertOne(
				Object.assign({ _id: new ObjectID() }, { ...data }, { password: hash })
			);
		res.json({ url: "/account/login" });
	});
});

handler.put(async (req, res) => {
	let data = req.body;
	data = JSON.parse(data);

	var person = await req.db.collection("users").findOne({ email: data.email });

	compare(data.password, person.password, function (err, result) {
		if (!err && result) {
			const claims = { sub: person._id, personEmail: person.email };
			const jwt = sign(claims, Secret, {
				expiresIn: "1h",
			});

			res.setHeader(
				"Set-Cookie",
				cookie.serialize("authToken", jwt, {
					httpOnly: true,
					secure: true,
					sameSite: true,
					maxAge: 3600,
					path: "/",
				})
			);
			// res.json({ authToken: jwt });
			res.json({ message: "Welcome Back!" });
		} else {
			alert("Something wrong!");
		}
	});
});

export default handler;

// authToken: jwt, url: "/account/myaccount"
