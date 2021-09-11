# Polluted cities

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the project</a>
    </li>
    <li><a href=#apis>APIs</a></li>
    <li><a href=#installation>Installation</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#framework">Framework</a></li> 
    <li><a href="#check-apis">Check APIs</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About the project
The project consists in creating two end-points or APIs, an end-point must allow the insertion in the database of a polluted location with relative image; and the other allows you to view a list of locations with images.
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

## Contact

Piero Sabino - [@SabinoPiero](https://twitter.com/SabinoPiero) - [P137ru590](https://www.instagram.com/p137ru590/?hl=it) - [Piero Sabino](https://www.linkedin.com/in/piero-sabino-15a1b671/) - piero.sa@icloud.com

Project Link: [https://github.com/pierre1590/start2impact-Nodejs](https://github.com/pierre1590/start2impact-Nodejs)


