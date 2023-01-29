const express = require('express');
const { connecter } = require('./Bdd/connect');
const  routeMangas  = require('./Routes/mangasRoute');
const mogoose = require('mongoose');
const app = express();
const cors = require('cors')


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use("/mangas",routeMangas);
app.use((req, res, next) => {
    res.setHeader('*');
    res.setHeader('*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


// faire dans le terminal la commande => mongosh ,pour recuperer le liens:" mongodb://127.0.0.1:27017/ "
connecter("mongodb://127.0.0.1:27017/",(erreur) => {
    if(erreur){
        console.log("Erreur de connexion avec la base de données ");
        process.exit(-1); // pour quitter la connexion. 
    }else{
        console.log("Connexion avec la base de données réussi !!");
        app.listen(5500,()=>console.log('server=> 5500'))
    }
});





