const fs = require("fs");
require("readline").createInterface({ input: fs.createReadStream("data.csv") })
  .on("line", line => {
    const [name, age] = line.split(",");
    console.log(JSON.stringify({ name, age }));
  });
