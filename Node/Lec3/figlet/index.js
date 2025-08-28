const figlet = require('figlet')
const colors = require('colors')

//console.log(figlet);
figlet("Prakhar Shahi", function (err,data){
    if(err){
        console.log("Somrthing went wrong");
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
})