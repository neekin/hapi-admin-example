const Posts = require('../services/posts');

class PostsController {

    static getAll(request, h) {
        const filter = request.query;
        return Posts.getAll(filter);
    }

    static findById(request, h) {
        const postId = request.params.id;
        return Posts.findById(postId);
    }

    static async create(request, h) {
        try {
            const post = await Posts.create(request.payload);
            return h.response(post).code(201);
        } catch(errors) {
            return h.response(errors).code(422);
        }
    }

    static edit(request, h) {
        const postId = request.params.id;
        const postData = request.payload;
        try {
            return Posts.edit(postId, postData);
        } catch(errors) {
            return h.response(errors).code(422);
        }
    }

    static async delete(request, h) {
        const postId = request.params.id;
        await Posts.delete(postId);
        return h.response({}).code(204);
    }

}

module.exports = PostsController;