import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { Secret } from "../../api/secret";
import cookie from "cookie";

const login = nextConnect();

login.use(middleware);

login.put(async (req, res) => {
	let data = req.body;
	// data = JSON.parse(data);

	var person = await req.db.collection("users").findOne({ email: data.email });
	if (!person) {
		res.json({ correct: false, message: "Something wrong!" });
	} else {
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
						// secure: true,
						sameSite: true,
						maxAge: 3600,
						path: "/",
					})
				);
				res.json({ correct: true, url: "/", message: "Welcome Back!" });
			} else {
				res.json({ correct: false, message: "Something wrong!" });
			}
		});
	}
});

export default (req, res) => login.apply(req, res);
