import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { ObjectID } from "mongodb";

const handler = nextConnect();

handler.use(middleware);

handler.put(async (req, res) => {
	let data = req.body;
	data = JSON.parse(data);
	let doc = await req.db
		.collection("users")
		.findOne({ email: data.email, password: data.password });

	res.json({ url: "/", info: doc });
});

export default (req, res) => handler.apply(req, res);
