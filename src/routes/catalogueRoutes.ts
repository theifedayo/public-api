import { Router } from 'express';
import { CatalogueController } from '../controllers/catalogueController';
import { CatalogueService } from '../services/catalogueService';
import { CatalogueRepository } from '../database/repositories/catalogueRepository';

const router = Router();
const catalogueRepository: CatalogueRepository = new CatalogueRepository();
const catalogueService: CatalogueService = new CatalogueService(catalogueRepository);
const catalogueController: CatalogueController = new CatalogueController(catalogueService);



router.get('/', catalogueController.getAllCatalogues.bind(catalogueController));
router.get('/:id', catalogueController.getCatalogueById.bind(catalogueController));
router.post('/', catalogueController.createCatalogue.bind(catalogueController));
router.put('/:id', catalogueController.updateCatalogue.bind(catalogueController));
router.delete('/:id', catalogueController.deleteCatalogue.bind(catalogueController));

export default router;