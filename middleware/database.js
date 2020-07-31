import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const url =
	"mongodb+srv://admin:Jp8lMilIeZLDREDH@cluster0.glab7.mongodb.net/users_database?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

const client = new MongoClient(url);

const dbName = "users_database";

async function database(req, res, next) {
	if (!client.isConnected()) await client.connect();
	console.log("Connected correctly to server");
	req.dbClient = client;
	req.db = client.db(dbName);
	return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
