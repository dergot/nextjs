import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { ObjectID } from "mongodb";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { Secret } from "../../api/secret";

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

	var person = await req.db
		.collection("users")
		.findOne({ email: data.email }, function (err, user) {
			if (err) {
				return done(err);
			}
		});
	compare(data.password, person.password, function (err, result) {
		if (!err && result) {
			const claims = { sub: person._id, personEmail: person.email };
			const jwt = sign(claims, Secret, {
				expiresIn: "1h",
			});
			// res.json({ authToken: jwt });
			res.json({ authToken: jwt, url: "/account/myaccount" });
		} else {
			alert("Something wrong!");
		}
	});
});

export default handler;
