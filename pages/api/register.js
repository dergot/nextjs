import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { ObjectID } from "mongodb";
import { hash } from "bcrypt";

const register = nextConnect();

register.use(middleware);

register.post(async (req, res) => {
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

export default (req, res) => register.apply(req, res);
