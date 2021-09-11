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
5) Install project dependencies :
```
     npm install 
```
6) Start the server :
```
     npm start
```

## Built with 
- Node.js
- MySQL
- Multer

## Framework
- Express.js






