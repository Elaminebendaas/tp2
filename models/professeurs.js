import {mongoose} from "../app.js"

const professeurSchema = new mongoose.Schema({
        prenom: String,
        nom: String,
        cours: [{idDuCours: String}] 
    }
)