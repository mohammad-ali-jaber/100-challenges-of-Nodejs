const { exec } = require("child_process");
exec("dir", (err, stdout) => {
    if(err){
        console.log(err);
        return;
    }
  console.log("Length:", stdout.length);
});
