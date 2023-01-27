class Mangas {
    constructor(name,author,img_mangas,img_tome, price, nbr_tome, stock, likes, release_date, resume,){
        this.name = name;
        this.author =author;
        this.img_mangas = img_mangas ; 
        this.img_tome = img_tome;
        this.price = price;
        this.nbr_tome = nbr_tome;
        this.stock = stock ; 
        this.likes = likes; 
        this.release_date = release_date; // date de sortie du mangas
        this.resume = resume;
    }
}

module.exports = {Mangas}