const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nobita')
.then(()=>{
    console.log("DB Connected Successfully");
})
.catch(()=>{
    console.log("DB not connected");
})



// interact

