import { Router } from 'express';
import { CatalogueController } from '../controllers/catalogueController';

const router = Router();
const catalogueController = new CatalogueController();

router.get('/', catalogueController.getAllPosts.bind(catalogueController));
router.get('/:id', catalogueController.getPostById.bind(catalogueController));
router.post('/', catalogueController.createPost.bind(catalogueController));
router.put('/:id', catalogueController.updatePost.bind(catalogueController));
router.delete('/:id', catalogueController.deletePost.bind(catalogueController));

export default router;