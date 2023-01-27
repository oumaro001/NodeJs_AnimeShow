const { MongoClient, Db } = require('mongodb');
const mongoose = require('mongoose');

let client = null;

//pour se connecter a la base de données
function connecter(url,callback){
    if(client == null){
        client = new MongoClient(url);

        client.connect((erreur)=>{
            if(erreur){
                client = null;
                callback(erreur)
            }else{
                callback();
            }
        })
    }else{
        callback();
    }

}


function bd(){
    return new Db(client , "dbOK")
}


function closeConnect(){
    if(client){

        client.close();
        client = null;
    }
}



module.exports = {connecter , bd , closeConnect}
