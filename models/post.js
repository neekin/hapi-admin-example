const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	title: { type: String, required: false },
	desc: { type: String, required: false }
}, {
    timestamps: true
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;