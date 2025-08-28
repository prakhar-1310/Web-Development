const mongoose = require('mongoose');
const Quotes = require('./models/Quotes');

let dummyQuotes = [
    {
        author: 'Samarth Vohra',
        text : 'Syntax Over Semantics'
    },
    {
        author:'Prakhar',
        text : 'Kaho piyo Mauj kato'
    },
    {
        author:'Thomas Shelby',
        text : 'Jindagi n milegi dobara'
    }
]

async function seedDB(){
    await Quotes.deleteMany({});
    await Quotes.insertMany(dummyQuotes);
    console.log("db seeded");
}

module.exports = seedDB;