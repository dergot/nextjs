import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { ObjectID } from "mongodb";
import { verify } from "jsonwebtoken";
import { Secret } from "../../api/secret";

const handler = nextConnect();

handler.use(middleware);

export const authenticated = (fn) => async (req, res) => {
	verify(req.cookies.authToken, Secret, async function (err, decoded) {
		if (!err && decoded) {
			return await fn(req, res);
		}
		res.json({ message: "Not Authenticated!" });
	});
};

handler.get(
	authenticated(async (req, res) => {
		let person = await req.db.collection("users").find().toArray();
		res.json(person);
	})
);

export default (req, res) => handler.apply(req, res);

// url: "/account/myaccount",
