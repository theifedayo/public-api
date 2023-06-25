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
      const catalogues: Catalogue[] = await this.postService.getAllPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async getPostById(req: Request, res: Response): Promise<void> {
    try {
      const postId: number = parseInt(req.params.id, 10);
      const post: Post | null = await this.postService.getPostById(postId);

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
      const postData: Partial<Post> = req.body;
      const createdPost: Post = await this.postService.createPost(postData);
      res.status(201).json(createdPost);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async updatePost(req: Request, res: Response): Promise<void> {
    try {
      const postId: number = parseInt(req.params.id, 10);
      const postData: Partial<Post> = req.body;
      const updatedPost: Post | null = await this.postService.updatePost(postId, postData);

      if (updatedPost) {
        res.json(updatedPost);
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async deletePost(req: Request, res: Response): Promise<void> {
    try {
      const postId: number = parseInt(req.params.id, 10);
      const deleted: boolean = await this.postService.deletePost(postId);

      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}