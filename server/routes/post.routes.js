import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
import * as HostController from '../controllers/host.controller';
const router = new Router();

// Get all Posts
router.route('/getPosts').get(PostController.getPosts);

// Get one post by title
router.route('/getPost').get(PostController.getPost);

// Add a new Post
router.route('/addPost').post(PostController.addPost);

// Delete a Post
router.route('/deletePost').post(PostController.deletePost);

// Get Host
router.route('/getHost').get(HostController.getHost);

export default router;
