// class TempEngin {
//     // body...
//     render(h, d) {

//         var temp = h;
//         var ref = d.ref || 'data';
//         var code = 'let ' + ref + '= arguments[0];return `' + temp + '`';
//         var dcq = Function(`${code}`);

//         return dcq(d);
//     }
// }
// var TempEngin = {}
// TempEngin.render = function(h, d) {
//     var temp = h;
//     var ref = d.ref || 'data';
//     var code = 'let ' + ref + '= arguments[0];return `' + temp + '`';
//     var dcq = Function(`${code}`);

//     return dcq(d);
// }
// 
var TempEngine = {
    render: function(h,d) {
        var temp = h;
        var ref = d.name||'data';
        var code = 'let ' + ref + '= arguments[0];return `' + temp + '`';
        var run = Function(`${code}`);
        return run(d);
    }
}

module.exports = TempEngine;