import { Request, Response } from 'express';
import { Catalogue } from '../database/models/catalogueModel';
import { CatalogueService } from '../services/catalogueService';

export class CatalogueController {
  private catalogueService: CatalogueService;

  constructor(catalogueService: CatalogueService) {
    this.catalogueService = catalogueService;
  }

  public async getAllCatalogues(req: Request, res: Response): Promise<void> {
    try {
      const catalogues: Catalogue[] = await this.catalogueService.getAllCatalogues();
      res.json(catalogues);
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async getCatalogueById(req: Request, res: Response): Promise<void> {
    try {
      const catalogueId: number = parseInt(req.params.id, 10);
      const catalogue: Catalogue | null = await this.catalogueService.getCatalogueById(catalogueId);

      if (catalogue) {
        res.json(catalogue);
      } else {
        res.status(404).json({ error: 'catalogue not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async createCatalogue(req: Request, res: Response): Promise<void> {
    try {
      const catalogueData: Partial<Catalogue> = req.body;
      const createdCatalogue: Catalogue = await this.catalogueService.createCatalogue(catalogueData);
      res.status(201).json(createdCatalogue);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async updateCatalogue(req: Request, res: Response): Promise<void> {
    try {
      const catalogueId: number = parseInt(req.params.id, 10);
      const catalogueData: Partial<Catalogue> = req.body;
      const updatedCatalogue: Catalogue | null = await this.catalogueService.updateCatalogue(catalogueId, catalogueData);

      if (updatedCatalogue) {
        res.json(updatedCatalogue);
      } else {
        res.status(404).json({ error: 'Catalogue not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async deleteCatalogue(req: Request, res: Response): Promise<void> {
    try {
      const catalogueId: number = parseInt(req.params.id, 10);
      const deleted: boolean = await this.catalogueService.deleteCatalogue(catalogueId);

      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'C not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}