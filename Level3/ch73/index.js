const text = "Hello everyone";
const b64 = Buffer.from(text, "utf8").toString("base64");
console.log("Base64:", b64);

const back = Buffer.from(b64, "base64").toString("utf8");
console.log("UTF8:", back);
