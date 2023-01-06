const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		mongoose.set('strictQuery', false);
		monggodr.connect();
	} catch {
		// Ecrire un truc
	}
};
