import {mongoose} from "../app.js"

const professeurSchema = new mongoose.Schema({
    
    prenom: String,
        nom: String,
        studentID: Number,
        cours: [{idDuCours: String}],
    }
)