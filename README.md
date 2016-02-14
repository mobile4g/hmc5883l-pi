# hcm5883l-pi

Access to the HCM5883L digital compass on the Rasperry Pi

## install

$ npm install hcm5883l-pi

## Usage

```
var HMC5883L = require("hmc5883l-pi");
var data = HMC5883L.readMag();
console.log("Got compass data!");
console.dir(data);
console.log("x=" + data.x + ", y=" + data.y + ", z=" + data.z);
```




