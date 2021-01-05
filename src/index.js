var crc = require("polycrc");
let buf = Buffer.from(
  "12345FFFF0F01234FFFFF0F033445566F0F099999FFFF0F0",
  "hex"
);

let test32r = new crc.CRC(32, 0x04c11db7, 0xffffffff, 0x00000000, false);
console.log("custom crc32 ->", test32r.calculate(buf).toString(16));

console.log("crc32 ->", crc.crc32(buf).toString(16));
console.log("crc24 ->", crc.crc24(buf).toString(16));
console.log("crc16 ->", crc.crc16(buf).toString(16));
console.log("crc8  ->", crc.crc8(buf).toString(16));
console.log("crc1  ->", crc.crc1(buf).toString(16));
