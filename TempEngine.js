class TempEngine {
    displace(h, d, r) {
        let temp = h;
        let ref = r || d.name || 'data';
        let code = 'return `' + temp + '`';
        let run = Function(ref, `${code}`);
        return run(d);
    }
}
module.exports = TempEngine;