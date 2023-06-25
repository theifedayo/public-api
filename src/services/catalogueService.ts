import { Catalogue } from '../database/models/catalogueModel';
import { CatalogueRepository } from '../database/repositories/catalogueRepository';

export class CatalogueService {
  private catalogueRepository: CatalogueRepository;

  constructor(catalogueRepository: CatalogueRepository) {
    this.catalogueRepository = catalogueRepository;
  }

  public async getAllCatalogues(): Promise<Catalogue[]> {
    return await this.catalogueRepository.getAllCatalogues();
  }

  public async getCatalogueById(id: number): Promise<Catalogue | null> {
    return await this.catalogueRepository.getCatalogueById(id);
  }

  public async createCatalogue(data: Partial<Catalogue>): Promise<Catalogue> {
    return await this.catalogueRepository.createCatalogue(data);
  }

  public async updateCatalogue(id: number, data: Partial<Catalogue>): Promise<any | null> {
    const [rowsAffected, updatedCatalogues] = await this.catalogueRepository.updateCatalogue(id, data);

    if (rowsAffected === 0) {
      return null; // No Catalogue found with the specified ID
    }
    return updatedCatalogues;
  }

  public async deleteCatalogue(id: number): Promise<boolean> {
    const rowsAffected = await this.catalogueRepository.deleteCatalogue(id);

    return rowsAffected > 0;
  }
}