import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { verify } from "jsonwebtoken";
import { Secret } from "../../api/secret";

const handler = nextConnect();

handler.use(middleware);

export const authenticated = (fn) => async (req, res) => {
	verify(req.query.authToken, Secret, async function (err, decoded) {
		if (!err && decoded) {
			return await fn(req, res, decoded.personEmail, req.query.authToken);
		}
		res.status(401).json({ message: "Not Authenticated!" });
	});
};

handler.get(
	authenticated(async (req, res, personEmail, authToken) => {
		let person = await req.db
			.collection("users")
			.findOne({ email: personEmail }, { _id: 0, phone: 0 });
		res.json({
			name: person.name,
			surname: person.surname,
			authToken: authToken,
		});
	})
);

export default (req, res) => handler.apply(req, res);