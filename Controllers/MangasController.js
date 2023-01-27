const {Mangas} = require('../Models/MangasModel');
require('body-parser');
const clientConnect = require('../Bdd/connect');
const { ObjectID } = require('bson');

const addMangas = async (req,res) =>{
try {
    let newMangas = new Mangas (
        req.body.name,
        req.body.author,
        req.body.img_mangas,
        req.body.img_tome,
        req.body.price,
        req.body.nbr_tome,
        req.body.stock,
        req.body.likes,
        req.body.release_date,
        req.body.resume);
    
    let result = await clientConnect.bd().collection("mangas").insertOne(newMangas);
    //permet d'ajouter un mangas a la collection mangas.
    res.status(200).json(result);

} catch (error) {
    console.log(error);
    res.status(500).json(error)
}

}

const getAllMangas = async (req,res)=>{
    try {
        let cursor = clientConnect.bd().collection("mangas").find();
        let result = await cursor.toArray(); // convertit cursor en Array
        if(result.length > 0){
            //si superieur a 0 ,c'est que le tableau contient des Mangas
            res.status(200).json(result);

        }else{
            res.status(204).json({message: "Aucun Mangas trouvé"});
        }
        
    } catch (error) {
        console.log(error);
    res.status(500).json(error)
    }
}


const getMangasById = async (req,res)=>{
    try {
        let id = new ObjectID(req.params.id);
        let cursor = clientConnect.bd().collection("mangas").find({_id : id});
        let result = await cursor.toArray(); // convertit cursor en Array
        if(result.length > 0){
            //si superieur a 0 ,c'est que le tableau contient des Mangas
            res.status(200).json(result[0]);

        }else{
            res.status(204).json({message: "Ce mangas n'existe pas"});
        }
        
    } catch (error) {
        console.log(error);
    res.status(500).json(error)
    }
}


const updateMangasById = async (req,res)=>{
        try {
            let id = new ObjectID(req.params.id);
            let NewName = req.body.name;
            let NewAuthor = req.body.author;
            let NewImg_mangas = req.body.img_mangas;
            let NewImg_tome = req.body.img_tome;
            let NewPrice = req.body.price;
            let NewNbr_tome = req.body.nbr_tome;
            let NewStock = req.body.stock;
            let NewLikes = req.body.likes;
            let NewRelease_date = req.body.release_date;
            let NewResume = req.body.resume;
            
            let result = await clientConnect.bd().collection("mangas")
                        .updateOne({_id: id},
                            {$set:{
                                name :NewName,
                                author : NewAuthor,
                                img_mangas: NewImg_mangas,
                                img_tome: NewImg_tome,
                                price : NewPrice,
                                nbr_tome: NewNbr_tome,
                                stock : NewStock,
                                likes: NewLikes,
                                release_date : NewRelease_date,
                                resume : NewResume,

                            } } )
                            if(res.modifiedCount == 1){
                                res.status(200).json(result,{message : "Le mangas a bien était modifiée"})
                            }else{
                                res.status(404).json({message: "Ce mangas n'existe pas"});

                            }

        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
}

const deleteMangasById = async (req,res)=>{
    try {
        let id = new ObjectID(req.params.id);
        
        let result = await clientConnect.bd().collection("mangas")
                    .deleteOne({_id: id});

                    if(res.deletedCount == 1){
                        res.status(200).json(result,{message : "Le mangas a bien était supprimer"})
                    }else{
                        res.status(404).json({message: "Ce mangas n'existe pas"});

                    }


    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
module.exports = {addMangas ,getAllMangas , getMangasById , updateMangasById ,deleteMangasById}