const fs = require("fs");
console.log(process.env.API_KEY);
fs.writeFileSync("./.env", `API_KEY=${process.env.API_KEY}\n`);
