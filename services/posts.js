const Post = require('../models/post');

class Posts {

    static async getAll(filter) {
        return Post.find(filter);
    }

    static async findById(postId) {
        return Post.findById(postId);
    }

    static async create(postData) {
        Posts.validateModel(postData);
        return new Post(postData).save();
    }

    static async edit(postId, postData) {
        Posts.validateModel(postData);
        await Post.updateOne({_id: postId}, postData);
        return this.findById(postId);
    }

    static async delete(postId) {
        return Post.deleteOne({_id: postId});
    }

    static validateModel(data) {
        const post = new Post(data);
        const validation = post.validateSync();
        if (validation)
            throw validation.errors
    }

}

module.exports = Posts;