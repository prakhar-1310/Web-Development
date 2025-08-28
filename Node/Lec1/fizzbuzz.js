// let n = 20;
// for(let i =1;i<=n;i++){
//     if(i%3==0 && i%5==0){
//         console.log("fizzbuzz");
//     }
//     else if (i%3==0){
//         console.log("fizz");
//     }
//     else if (i%5==0){
//         console.log("buzz");
//     }
//     else{
//         console.log(i);
//     }
// }



// let n =  process.argv.pop();
// let c3=1;
// let c5 = 1;
// let str = "";
// for (let i =1;i<=n;i++){
//     if(c3==3 && c5==5){
//         str+="fizzBuzz ";
//         c3=0;
//         c5=0;
//     }
//     else if(c3===3){
//         str+="fizz ";
//         c3=0;
//     }
//     else if(c5===5){
//         str+="buzz ";
//         c5=0;
//     }
//     else{
//         str+=i+" ";
//     }
//     c3++;
//     c5++;
// }
// console.log(str);


let n =  process.argv.pop();
let c3=1;
let c5 = 1;

for (let i =1;i<=n;i++){
    let str ="";
    if(c3===3){
        str+="fizz";
        c3=0;
    }
    if(c5===5){
        str+="buzz";
        c5=0;
    }
    if (str===""){
        str+=i;
    }
    console.log(str);
    c3++;
    c5++;
}

// % -> repeatitive division -> heaviest task 
// so we have to avoid this in our code
