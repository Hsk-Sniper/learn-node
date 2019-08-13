// const test = require("./test");
// console.log(test.a);

// const path = require("path");
// console.log(path.join("123","asd","asfasf"));
// console.log(path.resolve("123","asd","asfasf"));

const path = require("path");
const fs = require("fs");

const less = require("less");

// for(let i=1;i<=10;i++){
//     fs.writeFile(path.join("D:","a.txt"),i+"\n",{flag:"a"},()=>{
//         console.log("写入成功");
//     })
// }

// for(let i=1;i<=10;i++){
//     fs.writeFileSync(path.join("D:","a.txt"),i+"\n",{flag:"a"})
// }

// for(let i=1;i<=3;i++){
//     let json = {
//         title:`标题${i}`
//     }
//     json = JSON.stringify(json);
//     fs.writeFileSync(path.resolve("temp",`hello-${i}.json`),json,{flag:"w"})
// }

// for(let i=1;i<=3;i++){
//     let fileContent = fs.readFileSync(path.resolve("temp",`hello-${i}.json`),{encoding:"utf-8"});
//     fileContent = JSON.parse(fileContent);
//     fs.mkdirSync(path.resolve("temp",fileContent.title));
// }

let lessContent = fs.readFileSync(path.resolve("styles","main.less"),{encoding:"utf-8"});
let promise = less.render(lessContent);
promise.then((output)=>{
    fs.writeFileSync(path.resolve("styles","main.css"),output.css,{flag:"w"});
})






