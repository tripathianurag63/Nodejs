const fs = require("fs");
// fs is built in module
// Sync fn...
// ye ek test.txt name ki file create kar dega jisem hello world likha hoga
fs.writeFileSync("./test.txt", "Hello world");

//Async fn... ek call back fn bhi pass kar dete h taki koi error aye to wo handle kar le
fs.writeFile("./test.txt", "hello world", (err) => {})
// utf-8 is encoding kyuki hmare pas koi bhi file ho skti h binary wagerah to use convert karne ke liye
const result = fs.readFileSync("./contacts.txt", "utf-8")
console.log(result);

fs.readFile("./contacts.txt", "utf-8", (err, result) => {
   if(err) {
        console.log("Error", err);
    }
    else{
        console.log(result);
    }
});

fs.appendFileSync("./test.txt", `jhguyguygu\n`);
// file ke sath hm log kuich bhi kar skte h like
// dir bna skte h delete kar skte h read write kar skte h kuch bhi