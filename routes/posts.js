const PostsController = require('../controllers/posts_controller');

exports.plugin = {
    name:'posts',
    register: async function(server, options={auth:false}) {
        const prefix = ''
        options['tags'] =['api','Posts']
        server.route({method: 'GET', path: `${prefix}/posts`,  options:options,handler: PostsController.getAll });
        server.route({method: 'GET', path: `${prefix}/posts/{id}`,  options:options,handler: PostsController.findById });
        server.route({method: 'POST', path: `${prefix}/posts`, options:options,handler: PostsController.create });
        server.route({method: 'PATCH', path: `${prefix}/posts/{id}`, options:options,handler: PostsController.edit });
        server.route({ method: 'DELETE', path: `${prefix}/posts/{id}`, options:options,handler: PostsController.delete });

    }
}