
 let text = '\t<!DOCTYPE html>\n'+
'\t<html lang="en">\n'+
'\t<head>\n'+
	'\t<meta charset="UTF-8">\n'+
	'\t<title>Document</title>\n'+
'\t</head>\n'+
'\t<body>\n'+
    '\t<div>${data.title}</div>\n'+
	'\t<ul>\n'+
		'\t<li class="li-1">${data.item[0]}</li>\n'+
		'\t<li class="li-1">${data.item[1]}</li>\n'+
		'\t<li class="li-2">${data.item[2]}</li>\n'+
		'\t<li class="li-3">${data.item[3]}</li>\n'+
		'\t<li class="li-4">${data.item[4]}</li>\n'+
		'\t<li class="li-5">${data.item[5]}</li>\n'+
		'\t<li class="li-6">${data.item[6]}</li>\n'+
		'\t<li class="li-7">${data.item[7]}</li>\n'+
		'\t<li class="li-8">${data.item[8]}</li>\n'+
	'\t</ul>\n'+
	
'\t</body>\n'+
'\t</html>';
  
 var data = {name:'data',title:'this is aaaaa title',item:['1','2','3','4','5','6','7','8','9']};
let Engine = require('./TempEngine');
let res = Engine.render(text,data);
console.log(res);

var a={}
console.log(a.name)