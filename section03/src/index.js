// Common JS (CJS)
// const { add, sub } = require("./math");

// ES Module System
import mulp, { add, sub } from "./math.js";
import randomColor from "randomcolor";

const addNum = add(1, 2);
const sunNum = sub(1, 2);
const mulNum = mulp(1, 2);

console.log(addNum);
console.log(sunNum);
console.log(mulNum);

const color = randomColor();
console.log(color);
