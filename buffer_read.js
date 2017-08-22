bufTF8 = new Buffer("Some UTF8 Text \u00b6 \u30c6 \u20c6","utf-8");
console.log(bufTF8.toString());
console.log(bufTF8.toString("utf-8",5,9));
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder("utf-8");
console.log(decoder.write(bufTF8));
console.log(bufTF8[1].toString(16));
console.log(bufTF8.readUInt32BE(18).toString(16));