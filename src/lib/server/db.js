import { error } from '@sveltejs/kit';
import { MongoClient } from 'mongodb';
import { SECRET_MONGO_URI, SECRET_MONGO_DB } from '$env/static/private';

let _cached = global.mongo;

if (!_cached) {
	_cached = global.mongo = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
	if (_cached.conn) {
		return _cached.conn;
	}

	if (!_cached.promise) {
		const _mongoClient = new MongoClient(SECRET_MONGO_URI);
		_cached.promise = _mongoClient
			.connect()
			.then((client) => ({
				client,
				db: client.db(SECRET_MONGO_DB)
			}))
			.catch((err) => {
				console.log('caught error');
			});
	}

	try {
		_cached.conn = await _cached.promise;
	} catch (err) {
		throw error(504, 'Gateway Timeout. Could not connect to database.');
	}

	return _cached.conn;
};

export const getUser = async (email) => {
	const dbConnection = await connectToDatabase();
	const db = dbConnection.db;
	const user = await db.collection('users').findOne({ email });
	if (user) {
		delete user.password;
		delete user._id;
	}

	return user;
};
