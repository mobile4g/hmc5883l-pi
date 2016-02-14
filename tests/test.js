var HMC5883L = require("hmc5883l-pi");
var data = HMC5883L.readMag();
console.log("Got compass data!");
console.dir(data);