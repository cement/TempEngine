 module.exports=(h, d, r)=>{
    return Function(r || d.name || 'data', 'return `' + h + '`')(d);
 }