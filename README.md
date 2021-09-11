# Polluted cities

## APIs 
- List of all polluted locations with images :
```
http://localhost:85/allPlaces
```
- Create a place with its image :
```
http://localhost:85/addlPlace
```
## Installation
1) Clone the repo :
 ``` 
 git clone https://github.com/pierre1590/start2impact-Nodejs.git
```
2) Setup a MySQL Database;
3) Import the migration file <code>polluted_cities_places.sql</code>
4) Create a nodemon.json file and fill it with your DB data:
```
{
    "env" : {
        "NODE_PORT" : "",
        "NODE_DATABASE" : "",
        "NODE_DATABASE_USER" : "",
        "NODE_DATABASE_PW" : "",
        "NODE_DATABASE_URL" : "" 
    }
}
```
5) In the public directory, create a folder for uploading images.
6) Install project dependencies :
```
     npm install 
```
7) Start the server :
```
     npm start
```

## Built with 
- Bulma
- Node.js
- MySQL
- Multer
- Ejs
- Sequelize
- uuid 

## Framework
- Express.js

## Check APIs
To verify that the end-points worked I used Talend API Tester - Free edition, but you can also use other apps like Postman.
1) Create a project.
2) Add a request.
3) Select the method(GET,POST,...) and type the link in the address bar:
```
http://localhost:port/
```
4) Click on the "save" button and then on the "send" button.


