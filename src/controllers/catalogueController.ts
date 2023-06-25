import { Request, Response } from 'express';
import { Catalogue } from '../database/models/catalogueModel';
import { CatalogueService } from '../services/catalogueService';

export class PostController {
  private catalogueService: CatalogueService;

  constructor(catalogueService: CatalogueService) {
    this.catalogueService = catalogueService;
  }

  public async getAllPosts(req: Request, res: Response): Promise<void> {
    try {
      const catalogues: Catalogue[] = await this.catalogueService.getAllCatalogues();
      res.json(catalogues);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async getPostById(req: Request, res: Response): Promise<void> {
    try {
      const postId: number = parseInt(req.params.id, 10);
      const post: Catalogue | null = await this.catalogueService.getCatalogueById(postId);

      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async createPost(req: Request, res: Response): Promise<void> {
    try {
      const catalogueData: Partial<Catalogue> = req.body;
      const createdPost: Catalogue = await this.catalogueService.createCatalogue(catalogueData);
      res.status(201).json(createdPost);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async updatePost(req: Request, res: Response): Promise<void> {
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

  public async deletePost(req: Request, res: Response): Promise<void> {
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