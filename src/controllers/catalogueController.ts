import { Request, Response } from 'express';
import { Catalogue } from '../database/models/catalogueModel';
import { CatalogueService } from '../services/catalogueService';
import { makeApiRequest } from '../utils/apiClient';

export class CatalogueController {
  private catalogueService: CatalogueService;

  constructor(catalogueService: CatalogueService) {
    this.catalogueService = catalogueService;
  }

  public async getAllCatalogues(req: Request, res: Response): Promise<any> {
    try {
      const catalogues: Catalogue[] = await this.catalogueService.getAllCatalogues();
      return res.status(201).json({
        status: 200,
        success: true,
        data: catalogues
      });
    } catch (error) {
      return res.status(500).json({ 
        status: 500,
        success: false,
        message: 'Internal server error'
      });
    }
  }

  public async getCatalogueById(req: Request, res: Response): Promise<any> {
    try {
      const catalogueId: number = parseInt(req.params.id, 10);
      const catalogue: Catalogue | null = await this.catalogueService.getCatalogueById(catalogueId);

      if (catalogue) {
        return res.status(201).json({
          status: 200,
          success: true,
          data: catalogue
        });;
      } else {
        return res.status(404).json({ 
          status: 404,
          success: false,
          message: 'Catalogue not found'
        });;
      }
    } catch (error) {
      return res.status(500).json({ 
        status: 500,
        success: false,
        message: 'Internal server error'
      });
    }
  }

  public async createCatalogue(req: Request, res: Response): Promise<any> {
    try {
      const catalogueData: Partial<Catalogue> = req.body;
      const createdCatalogue: Catalogue = await this.catalogueService.createCatalogue(catalogueData);
      return res.status(201).json({
        status: 201,
        success: true,
        data: createdCatalogue
      });
    } catch (error) {
      return res.status(500).json({ 
        status: 500,
        success: false,
        message: 'Internal server error'
      });
    }
  }

  public async updateCatalogue(req: Request, res: Response): Promise<any> {
    try {
      const catalogueId: number = parseInt(req.params.id, 10);
      console.log(catalogueId)
      const catalogueData: Partial<Catalogue> = req.body;
      const updatedCatalogue: Catalogue | null = await this.catalogueService.updateCatalogue(catalogueId, catalogueData);

      if (updatedCatalogue) {
        return res.status(200).json({ 
          status: 500,
          success: true,
          data: updatedCatalogue
        });
      } else {
        rreturn es.status(404).json({
          status: 404,
          success: false,
          message: 'Catalogue not found'
        });
      }
    } catch (error) {
      return res.status(500).json({ 
        status: 500,
        success: false,
        message: 'Internal server error'
      });
    }
  }

  public async deleteCatalogue(req: Request, res: Response): Promise<any> {
    try {
      const catalogueId: number = parseInt(req.params.id, 10);
      const deleted: boolean = await this.catalogueService.deleteCatalogue(catalogueId);

      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'C not found' });
      }
    } catch (error) {
      return res.status(500).json({ 
        status: 500,
        success: false,
        message: 'Internal server error'
      });
    }
  }


  public async getPublicapiCatalogues(req: Request, res: Response): Promise<void> {
    try {
      const catalogues: Catalogue[] = await makeApiRequest("https://api.publicapis.org/entries");
      res.json(catalogues);
    } catch (error) {
      res.status(500).json({ 
        status: 500,
        success: false,
        message: 'Internal server error'
      });
    }
  }
}