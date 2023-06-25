import chai from 'chai';
import supertest from 'supertest';
import app from '../index'; // Your Express app
import { expect } from 'chai';

const request = supertest(app);

describe('Catalogue Endpoints', () => {
    let catalogueId: number;
  
    it('should create a new catalogue', async () => {
      const catalogue = { 
        API: "Meteorologisk Institutt",
        Description: "Weather and climate data",
        Auth: "User-Agent",
        HTTPS: true,
        Cors: "unknown",
        Link: "https://api.met.no/weatherapi/documentation",
        Category: "Weather"
    };
  
      const response = await request.post('/api/catalogues').send(catalogue);
      expect(response.status).to.equal(201);
  
      catalogueId = response.body.id;
      console.log(catalogueId)
    });
  
    it('should get all catalogues', async () => {
      const response = await request.get('/api/catalogues');
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('array');
    });
  
    it('should get a catalogue by ID', async () => {
      const response = await request.get(`/api/catalogues/${catalogueId}`);
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('object');
      expect(response.body.id).to.equal(catalogueId);
    });
  
    it('should update a catalogue', async () => {
      const updatedCatalogue = { 
        API: "Weatherbit",
        Description: "Weather",
        Auth: "apiKey",
        HTTPS: true,
        Cors: "unknown",
        Link: "https://www.weatherbit.io/api",
        Category: "Weather"
      };
      console.log(catalogueId)
  
      const response = await request.put(`/api/catalogues/${catalogueId}`).send(updatedCatalogue);
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('object');
      expect(response.body.id).to.equal(catalogueId);
      expect(response.body.API).to.equal(updatedCatalogue.API);
      expect(response.body.HTTPS).to.equal(updatedCatalogue.HTTPS);
    });
  
    it('should delete a catalogue', async () => {
      const response = await request.delete(`/api/catalogues/${catalogueId}`);
      expect(response.status).to.equal(204);
    });
  
    it('should return 404 when getting a deleted catalogue', async () => {
      const response = await request.get(`/api/catalogues/${catalogueId}`);
      expect(response.status).to.equal(404);
    });
  });