
const NUMBER = '0123456789';
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHABET_NUMBER = ALPHABET + NUMBER;
const HEX = 'ABCDEFabcdef0123456789';


const Randomizer = function (){};

Randomizer.prototype._rand = function(T){
    var n = Math.round(Math.random() * T.length);
    if(n > 0) return n;
    return this._rand(T);
}

Randomizer.prototype._generate = function(T, limit){
    var result = '';
    for(var i = 0; i < limit; i++){
        result += T[this._rand(T) - 1];
    }
    return result;
};

Randomizer.prototype.number = function(n){
    n = n ? n: 5;
    return this._generate(NUMBER, n);
}

Randomizer.prototype.code = function(n){
    n = n ? n: 6;
    return this._generate(ALPHABET, n);
}

Randomizer.prototype.hex = function(n){
    n = n ? n: 6;
    return this._generate(HEX, n);
}

Randomizer.prototype.serial = function(c, n){
    n = n ? n: 5;
    c = c ? c: 4;
    var serial = '';
    for(var i = 0; i < n; i++){
        serial += this._generate(ALPHABET_NUMBER, c);
        if(i + 1 != n) serial += '-';
    }
    return serial;
}

const r = new Randomizer();

// Examples
// console.log('Temporal password:', r.code());
// console.log('SMS Verification', r.number());
// console.log('Windows serial', r.serial());
// console.log('Youtube TV activation code', r.serial(3, 6));

module.exports.Randomizer = Randomizer;
module.exports = r;