import chai from 'chai';
import supertest from 'supertest';
import app from '../index'; // Your Express app
import { expect } from 'chai';

const request = supertest(app);

const createPayload = { 
    API: "Meteorologisk Institutt",
    Description: "Weather and climate data",
    Auth: "User-Agent",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://api.met.no/weatherapi/documentation",
    Category: "Weather"
};

const updatePayload = { 
    API: "Weatherbit",
    Description: "Weather",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "unknown",
    Link: "https://www.weatherbit.io/api",
    Category: "Weather"
};


describe('CATALOGUE ENDPOINTS', () => {
    let catalogueId: number;
  
    it('should create a new catalogue', async () => {
      const response = await request.post('/api/catalogues').send(createPayload);
      expect(response.status).to.equal(201);
      catalogueId = response.body.data.id;
    });
  

    it('should get all catalogues', async () => {
      const response = await request.get('/api/catalogues');
      expect(response.status).to.equal(200);
      expect(response.body.data).to.be.an('array');
    });
  

    it('should get a catalogue by ID', async () => {
      const response = await request.get(`/api/catalogues/${catalogueId}`);
      expect(response.status).to.equal(200);
      expect(response.body.data).to.be.an('object');
      expect(response.body.data.id).to.equal(catalogueId);
    });
  

    it('should update a catalogue', async () => {
      const response = await request.put(`/api/catalogues/${catalogueId}`).send(updatePayload);
      expect(response.status).to.equal(200);
      expect(response.body.data).to.be.an('object');
      expect(response.body.data.API).to.equal(updatePayload.API);
      expect(response.body.data.HTTPS).to.equal(updatePayload.HTTPS);
    });
  

    it('should delete a catalogue', async () => {
      const response = await request.delete(`/api/catalogues/${catalogueId}`);
      expect(response.status).to.equal(200);
    });
  

    it('should return 404 when getting a deleted catalogue', async () => {
      const response = await request.get(`/api/catalogues/${catalogueId}`);
      expect(response.status).to.equal(404);
    });

    it('should get all catalogues from public api', async () => {
        const response = await request.get('/api/catalogues/publicapis');
        expect(response.status).to.equal(200);
        expect(response.body.data).to.be.an('object');
        expect(response.body.data.entries).to.be.an('array');
      });


  });