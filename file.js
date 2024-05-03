const fs = require("fs");

// Sync fn...
// ye ek test.txt name ki file create kar dega jisem hello world likha hoga
//fs.writeFileSync("./test.txt", "Hello world");

//Async fn...
//fs.writeFile("./test.txt", "hello world", (err) => {})

//const result = fs.readFileSync("./contacts.txt", "utf-8")
//console.log(result);

//fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//    if(err) {
 //       console.log("Error", err);
   // }
    //else{
      //  console.log(result);
    //}
//});

fs.appendFileSync("./test.txt", `jhguyguygu\n`);
