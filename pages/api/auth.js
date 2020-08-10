import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { ObjectID } from "mongodb";
import bcrypt from "bcrypt";

const handler = nextConnect();

const hash = bcrypt.hash(data.password, 10);

handler.use(middleware);

handler.post(async (req, res) => {
	var request = req;
	let data = req.body;
	data = JSON.parse(data);
	delete data.repeatedPassword;

	let doc = await request.db
		.collection("users")
		.insertOne(
			Object.assign({ _id: new ObjectID() }, { ...data }, { password: hash })
		);
	res.json({ url: "/account/login" });
});

handler.put(async (req, res) => {
	let data = req.body;
	data = JSON.parse(data);

	compare(data.password);
	let doc = await req.db
		.collection("users")
		.findOne({ email: data.email, password: data.password });
	console.log(doc);
	res.json({ url: "/account/myaccount", info: doc });
});

export default handler;
