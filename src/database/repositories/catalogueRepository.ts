import { Catalogue } from '../models/catalogueModel';

export class CatalogueRepository {
  public async getAllCatalogues(): Promise<Catalogue[]> {
    return await Catalogue.findAll();
  }

  public async getCatalogueById(id: number): Promise<Catalogue | null> {
    return await Catalogue.findByPk(id);
  }

  public async createCatalogue(data: Partial<Catalogue>): Promise<Catalogue> {
    return await Catalogue.create(data);
  }

  public async updateCatalogue(id: number, data: Partial<Catalogue>): Promise<[number, Catalogue[]]> {
    return await Catalogue.update(data, {
      where: { id },
      returning: true,
    });
  }

  public async deleteCatalogue(id: number): Promise<number> {
    return await Catalogue.destroy({
      where: { id },
    });
  }
}