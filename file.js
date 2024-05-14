const fs = require("fs");
const os = require("os");
// ye hmare cpu ka size btata h 
// aur jitna cpu size hoga utne hi threads le skte h hm
console.log(os.cpus().length);

// Blocking or Sync...
console.log("1");
const result = fs.readFileSync("contacts.txt", "utf-8");
console.log(result);
console.log("2");

// so in this case sabse pehle 1 print hoga
// then result print hoga
// then 2 kyuki ye bloack kar leta h func ko aur jab tak run nhi ho jata aage nhi badhega

// Non- Blocking or Async

console.log("1");
fs.readFile("contacts.txt", "utf-8", (err, result) => {
    console.log(result);
});
console.log("2");

// isme print hoga 1 2 then result
// ye 