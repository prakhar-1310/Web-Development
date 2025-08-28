// type of modeules are 2:
// 1.common js modeule (es5) (ecma script 5) -> require
// 2. es module (es6) -> import

// node js by default work in common js module
// npm init -y 
// package.json:
// make some changes so that we use import word instead of require
// add -> "type": "module"





const fs = require('fs');
//console.log(fs, 'fs');


// create or write
let data = "hii"
// fs.writeFile(file name, data, object , callBack function)// accepts 4 argument last 2 are not compulsory
fs.writeFile('sam.txt',data,{
    encoding: "utf-8",
    flag :'w'
},(err)=>{
    if(err){throw err}
    console.log("file created successfully");
})

// fs.writeFileSync('abc.txt', data);

// read
// 3 arguments
// opt1
fs.readFile('sam.txt', {}, (err,data)=>{
    if(err){throw err}
    console.log(data.toString());
})


//opt2
fs.readFile('sam.txt', {
    encoding : "utf-8",
    flag: 'r'
}, (err,data)=>{
    if(err){throw err}
    console.log(data);
})

// opt 3
let data2 = fs.readFileSync('sam.txt');
console.log(data2.toString());


//update

// fs.appendFile('Sam.txt', "mai nhi bata rha", (err)=>{
//     if(err){throw err}
//     console.log("data edited successfully");
// })

fs.appendFileSync('sam.txt', 'aag lasge basti m');


// //delete
// fs.unlink('sam.txt', (err)=>{
//     if(err){throw err}
//     console.log("file deleted successfully");
// })


// fs.unlinkSync('sam.txt');