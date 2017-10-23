var displace = require('./TempEngine2.js');
var fs = require('fs');

var r = fs.readFileSync('./HtmlTemp.html',{encoding:'utf8',flag:'r'});
console.log(r);
let data = {title:'The displaced title',item:['1','2','3','4','5','6','7','8','9']};

let res = displace(r,data,'d');
console.log(res);