const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/nobita')// nobita is our db name
.then(()=>{
    console.log("DB Connected Successfully");
})
.catch(()=>{
    console.log("DB not connected");
})

// nobita db hoga to usse connect hojayega ya nhi hoga toh new create hoke usse connect ho jayega


// schema (blue-print)
// mongoose method to create schema
// we know mongoDb is schemaless
const movieSchema = new mongoose.Schema({    // schema is also a class, schema always accepts an object
    name : String,
    rating : Number,
    year : Number,
    isWatched : Boolean
});



// Model (JS class) or 
// model is a JS class
// model is always singular
// model 1st letter always Capital
// Ex. Product


// the reason behind model name convention is
// when model becomes collections in DB then
// its first letter will become small and become plurals
// Ex. products


const Movie= mongoose.model('Movie', movieSchema);  // Movie is a collection/model
// left side Movie is a variable using which u will access the db in vs code 
// console.log(Movie);


// with the help of model we can create new Object (as model is a JS class and in JS we can create new object with the help of class)

// making new object
let ironMan = new Movie({
    name : "IronMan",
    rating : 9,
    year: 2025,
    isWatched : true
})

// console.log(ironMan);

// store this object(doc) in db
ironMan.save();// db ke andar iss object to store krdega permananently

// JS method ki wajah se alga se save karna pda
// if we use -> Movie.create() OR Movie.insertOne()  OR Movie.insertMany([])  then we dont have to save , automatically saved


