console.log("welcome ");
console.log(process.argv);// return where node js file is runnin

// let count = process.argv.pop();
// let content = process.argv.pop();

//node app.js sam 12      <-- input
// this 12 will be added in the argv array 


// for (let i =1;i<=count;i++){
//     console.log(content);
// }

let neww = process.argv.slice(2);
console.log(neww);

for (let i =1;i<=neww[1];i++){
    console.log(neww[0]);
}

// to convert String to integer
//int = parseInt(string)



console.log(process.cwd());
console.log(__dirname);

// PS D:\Study Materials\Sup150\Web development class\Node\Lec1> node index.js
// D:\Study Materials\Sup150\Web development class\Node\Lec1
// D:\Study Materials\Sup150\Web development class\Node\Lec1
// here both location are same as we are running in lec 1



// PS D:\Study Materials\Sup150\Web development class\Node\Lec1> cd ..
// PS D:\Study Materials\Sup150\Web development class\Node> node .\Lec1\ index.js
// D:\Study Materials\Sup150\Web development class\Node
// D:\Study Materials\Sup150\Web development class\Node\Lec1


