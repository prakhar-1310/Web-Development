const Quotes = require('../models/Quotes');
const router = require('express').Router();

router.get('/allquotes', async (req,res)=>{
    try{
        let allQuotes = await Quotes.find({});
        res.status(200).json(allQuotes);
    }
    catch(e) {
        res.status(400).json({msg:"something went wrong"});
    }
})

router.post('/addquotes', async (req,res)=>{
    let {author, text} = req.body;
    await Quotes.create({author,text});
    res.status(201).json({msg:"new quote added successfully"});
})

router.get('/quotes/:id', async(req,res)=>{
    let {id} = req.params;
    let quote = await Quotes.findById(id)
    res.status(200).json(quote);
})

module.exports = router;