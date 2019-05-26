const fs = require("fs");
fs.writeFileSync("./build/static/_redirects", `/*    /index.html  200`);
