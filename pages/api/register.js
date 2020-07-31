import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { ObjectID } from "mongodb";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
	let data = req.body;
	data = JSON.parse(data);
	let doc = await req.db
		.collection("users")
		.insertOne(Object.assign({ _id: new ObjectID() }, data));

	res.json({ url: "/account/login" });
});

export default handler;
