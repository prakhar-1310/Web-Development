// file 2


// when we require a file it runs first
// const sona = require('./index.js')// require means we are importing a  module
// console.log(sona); // without export return empty onject



// const sona = require('./index.js')
// console.log(sona);
// console.log(sona.sammy);
// console.log(sona.maverick);
// sona.vohraa()


// const {sam,vohra,mav} = require('./index.js');// destructured by same name as exported
// console.log(sam);
// console.log(mav);
// vohra()



// const {sam: s,vohra: v,mav: m} = require('./index.js');// destructured by same name as exported
// console.log(s);
// console.log(m);
// v()

let naam = require('./index.js');
console.log(naam);
