// Common JS (CJS)
// const { add, sub } = require("./math");

import mulp, { add, sub } from "./math.js";

// ES Module System

const addNum = add(1, 2);
const sunNum = sub(1, 2);
const mulNum = mulp(1, 2);

console.log(addNum);
console.log(sunNum);
console.log(mulNum);
