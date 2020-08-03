import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { ObjectID } from "mongodb";
import { hash } from "bcrypt";

const handler = nextConnect();

handler.use(middleware);

hash(req.body.password, 12, function (err, hash) {});

handler.post(async (req, res) => {
	let data =
		(req.body.name, req.body.surname, req.body.phone, req.body.email, hash);
	data = JSON.parse(data);
	let doc = await req.db
		.collection("users")
		.insertOne(Object.assign({ _id: new ObjectID() }, data));
	res.json({ url: "/account/login" });
});

export default handler;
