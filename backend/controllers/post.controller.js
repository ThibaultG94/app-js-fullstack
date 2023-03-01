const PostModel = require('../models/post.model');

module.exports.setPosts = async (req, res) => {
	if (!req.body.message) {
		res.status(400).json({ message: "Merci d'ajouter un message" });
	}
};
