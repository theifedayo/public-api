#
### Introduction
This is a RESTful API built using Typescript and MySQL that performs CRUD operations on a Catalogue. It includes endpoints to get all catalogues from DB, get a catalogue by id, create new catalogue, update and delete a catalogue. An endpoint to retrieve catalogues from https://api.publicapis.org/entries is also included.

</br>

### Setup
Clone the repository to your local machine.
```bash
git clone https://github.com/theifedayo/public-api.git
```
Ensure that you have Typescript, Node.js and MySQL installed on your machine.
Navigate to the root directory of the project in a terminal.
```bash
cd public-api
```
Run the following command to install the necessary dependencies
```bash
npm install
```
Add a .env file following sample.env file example with the values of each variable
```.env
DB_USERNAME=
DB_PASSWORD=
DATABASE=
DB_HOST=
PORT=3000
NODE_ENV=
```

</br>

### Migration
To create migration, you navigate to the database folder in your terminal and run the command below to initialize Sequelize and generate the necessary files
```bash
npx sequelize-cli init
```
Run the following command to generate a new migration file:
```bash
npx sequelize-cli migration:generate --name create-Catalogues-table
```
Edit the migration file and add the necessary code to define the changes you want to make to the database schema. Run the migration and apply the changes to the database with
```bash
npx sequelize-cli db:migrate
```

### Running Server
#### Locally
In order to have everything run well, you have to install your dependencies and connect to your MySQL database

Run the following command to start the server in development mode:
```bash
npm run dev
```
The server will run on http://localhost:3000 by default


</br>

## Available Endpoints
Base URL[dev]: http://localhost:3000
### List Catalogues
#### GET api/catalogues/
Returns a list of catalogues with their API, Description, Auth, HTTPS, Cors, Link, Category.\
Request Parameters\
None.\
Response
* 200 OK on success

```json
{
    "status": 200,
    "success": true,
    "data": [
        {
            "id": 1,
            "API": "Oikolabmet",
            "Description": "70+ years of global, hourly historical and forecast weather data from NOAA and ECMWF",
            "Auth": "apiKey",
            "HTTPS": "1",
            "Cors": "yes",
            "Link": "https://docs.oikolab.com",
            "Category": "Weather",
            "createdAt": "2023-06-25T14:48:05.000Z",
            "updatedAt": "2023-06-25T16:34:17.000Z"
        },
        {
            "API": "PlaceKitten",
            "Description": "Placeholder Kitten pictures",
            "Auth": "",
            "HTTPS": true,
            "Cors": "yes",
            "Link": "https://placekitten.com/",
            "Category": "Animals",
            "createdAt": "2023-06-25T14:54:37.000Z",
            "updatedAt": "2023-06-25T16:30:00.000Z"
        },
    ]
}
```

### Get a Catalogue
#### GET api/catalogues/:id
Returns catalogue data for the specified catalogue.\
Request Parameters
* `id` (int, required) - The ID of the catalogue to be retrieved from the database.
Response
* 200 OK on success
```json
{
    "status": 200,
    "success": true,
    "data": {
        "id": 1,
        "API": "Oikolabmes",
        "Description": "70+ years of global, hourly historical and forecast weather data from NOAA and ECMWF",
        "Auth": "apiKey",
        "HTTPS": "1",
        "Cors": "yes",
        "Link": "https://docs.oikolab.com",
        "Category": "Weather",
        "createdAt": "2023-06-25T14:48:05.000Z",
        "updatedAt": "2023-06-25T16:34:17.000Z"
    }
}
```
If the specified catalogue with the ID is not found, the HTTP status code in the response header is `404 Not Found`.

### Add Catalogue
#### POST api/catalogues/
Adds a new catalogue\
Request Body
* `API`(string, required) - name of API.
* `Description`(string, required) - The description of the API.
* `Auth`(string, required) - Auth required for accessing API.
* `HTTPS`(string, required) - security.
* `Cors`(string, required) - Cross Origin.
* `Link`(string, required) - URL for API.
* `Category`(string, required) - Category of API.

Example request body:
```json
{
    "API": "Oikolabmes",
    "Description": "70+ years of global, hourly historical and forecast weather data from NOAA and ECMWF",
    "Auth": "apiKey",
    "HTTPS": true,
    "Cors": "yes",
    "Link": "https://docs.oikolab.com",
    "Category": "Weather",
}
```
Response
* 201 Created on success
```json
{
    "status": 201,
    "success": true,
    "data": {
        "id": 19,
        "API": "Oikolabme2t2ssnwts",
        "Description": "70+ years of global, hourly historical and forecast weather data from NOAA and ECMWF",
        "Auth": "apiKey",
        "HTTPS": true,
        "Cors": "yes",
        "Link": "https://docs.oikolab.com",
        "Category": "Weather",
        "createdAt": "2023-06-25T14:54:37.000Z",
        "updatedAt": "2023-06-25T16:30:00.000Z"
    }
}
```
If the specified catalogue with the ID is not found, the HTTP status code in the response header is `404 Not Found`.


### Update a Catalogue
#### PUT api/catalogues/:id
Updates catalogue data for the specified catalogue.\
Request Parameters
* `id` (int, required) - The ID of the catalogue to be updated in the database.
Request Body
* `API`(string, required) - name of API.
* `Description`(string, required) - The description of the API.
* `Auth`(string, required) - Auth required for accessing API.
* `HTTPS`(string, required) - security.
* `Cors`(string, required) - Cross Origin.
* `Link`(string, required) - URL for API.
* `Category`(string, required) - Category of API.

Example request body:
```json
{
    "API": "Oikolabmes",
    "Description": "70+ years of global, hourly historical and forecast weather data from NOAA and ECMWF",
    "Auth": "apiKey",
    "HTTPS": true,
    "Cors": "yes",
    "Link": "https://docs.oikolab.com",
    "Category": "Weather",
}
```
Response
* 200 OK on success
```json
{
    "status": 200,
    "success": true,
    "data": {
        "API": "Oikolabmes",
        "Description": "70+ years of global, hourly historical and forecast weather data from NOAA and ECMWF",
        "Auth": "apiKey",
        "HTTPS": true,
        "Cors": "yes",
        "Link": "https://docs.oikolab.com",
        "Category": "Weather"
    }
}
```
If the specified catalogue with the ID is not found, the HTTP status code in the response header is `404 Not Found`.

### Delete a Catalogue
#### DELETE api/catalogues/:id
Deletes catalogue data for the specified catalogue.\
Request Parameters
* `id` (int, required) - The ID of the catalogue to be deleted from the database
* 200 OK on success
```json
{
    "status": 200,
    "success": true,
    "message": "Catalogue deleted successfully"
}
```
If the specified catalogue with the ID is not found, the HTTP status code in the response header is `404 Not Found`.

### List Public API Catalogues
#### GET api/catalogues/publicapis
Returns a list of catalogues fetched from https://api.publicapis.org/entries.
Request Parameters\
None.\
Response
* 200 OK on success

```json
{
    "status": 200,
    "success": true,
    "data": {
        "count": 1425,
        "entries": [
            {
                "API": "AdoptAPet",
                "Description": "Resource to help get pets adopted",
                "Auth": "apiKey",
                "HTTPS": true,
                "Cors": "yes",
                "Link": "https://www.adoptapet.com/public/apis/pet_list.html",
                "Category": "Animals"
            },
            {
                "API": "Axolotl",
                "Description": "Collection of axolotl pictures and facts",
                "Auth": "",
                "HTTPS": true,
                "Cors": "no",
                "Link": "https://theaxolotlapi.netlify.app/",
                "Category": "Animals"
            },
            .....
            .....
        ]
    }
}
```
</br>

### Errors
The response for request failures or any other error are rather simple.
```json
{
	"status": 500,
    "success": false,
    "message": "Internal server error"
}
```

### Tests
Open your terminal and execute the tests with:
```bash
npm run test
```
</br>
You should have something similar to this:

```bash
  CATALOGUE ENDPOINTS
Database connection has been established successfully.
    ✔ should create a new catalogue (2544ms)
    ✔ should get all catalogues (185ms)
    ✔ should get a catalogue by ID (185ms)
    ✔ should update a catalogue (884ms)
    ✔ should delete a catalogue (492ms)
    ✔ should return 404 when getting a deleted catalogue (179ms)
    ✔ should get all catalogues from public api (2726ms)


  7 passing (7s)
```

