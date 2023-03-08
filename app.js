// function say_hello(name) {
//     console.log("Hello " + name+"!");
// }

// say_hello("Gursahib Singh");
// var x = 3;
// console.log(global.x);

// console.log("Result"+ 2 );
// console.log("hello")
// var a = setTimeout(callb1,20000)
// var b = setTimeout(callb2,0)
// console.log("world")

// function callb1(){console.log("I'm cb1")}
// function callb2(){console.log("I'm cb2")}


// console.log("hello")
// console.warn("don't do that!")
// console.info("I'm running")

// p = [{"name":"bobby",age:40},
// {"name":"steve",age:40},
// {"name":"jane",age:40}]
// console.table(p)

// console.time('Marker')

// setTimeout(function(){
//     console.timeEnd('Marker')
// },1000)
// --------------------------------------------------------------------
// const second = require('./second');

// console.log(second.diff(12,3));
// console.log(second.jma(3,4));

// ------------------------------------------------------------------------
// const event_emitter = require('events');

// // const event = new event_emitter;

// // event.on("buggi", ()=> {
// //     console.log("Buggi detected!")
// // })

// // event.emit("buggi");

// class Person extends event_emitter {
//     constructor(naam){
//         super();
//         this.name = naam;
//     }
// }

// let sabby = new Person("Sabby");

// sabby.on("trigger",(num)=>{
//     console.log(sabby.name + "'s age is " +num);
// })

// sabby.emit("trigger",20);
// ------------------------------------------------------------------------------------

// const http = require('http');

// const server = http.createServer((req,res) =>{
//     if(req.url === '/'){
//         res.write("<h1>Root Directory</h1>");
//         res.end();
//     }

//     else {
//         res.write("<h1>Tum rehnde do, tumse na hoga</h1>");
//         res.end();
//     }
// });

// server.listen("3000");

// -----------------------------------------------------------------------------------------

// const fs = require("fs");

// // fs.writeFile("example.txt","Hi, my name is Gursahib Singh!", (err)=> {
// //     if (err){
// //         console.log(err);
// //     }
    
// //     else {
// //         console.log("File has been successfully made!");
// //     }
// // })

// // fs.appendFile("example.txt"," I am a third-year student at SFU.", (err)=> {
// //     if (err){
// //         console.log(err);
// //     }

// //     else {
// //         console.log("Text appended");
// //     }
// // })

// // fs.rename("example.txt","sample.txt", (err)=> {
// //     if (err) {
// //         console.log(err);
// //     }

// //     else {
// //         console.log("Successfully renamed!");
// //     }
// // })

// // fs.unlink("sample.txt", (err)=> {
// //     if (err) {
// //         console.log(err);
// //     }

// //     else {
// //         console.log("Successfully deleted the file!");
// //     }
// // })

// fs.readFile("example.txt", "utf8", (err,data)=> {
//     if (err) {
//         console.log(err);
//     }
    
//     else {
//         console.log("File read successfully!");
//         console.log(data);
//     }
// })
// -----------------------------------------------------------------------------------

// const fs = require("fs");

// fs.mkdir("folder",(err)=> {
//     if (err){
//         console.log(err);
//     }

//     else {
//         console.log("Folder create successfully!");
//     }
// });

// fs.writeFile("./folder/sample.txt","This is a new file!", (err)=> {
//     if(err){
//         console.log(err);
//     }

//     else {
//         console.log("File has been created successfully!");
//     }
// });
// -------------------------------------------------------------------------------------- 
// const http = require("http");
// const server = http.createServer((req,res) => {
//     if(req.url === '/'){
//         res.write("<h1>Hello World!</h1>");
//         res.end();
//     }

//     else {
//         res.write("<h1>Chala ja!!</h1>");
//         res.end();
//     }
// });

// server.listen("3000");
// -------------------------------------------------------------------------------------------
// const express = require("express");

// const app = express();

// app.get('/', (req,res)=> {
//     res.send("Hello World!");
// });

// app.listen("3000");
// -----------------------------------------------------------------------------------------
// var path = require('path')

// var obj = path.parse(__filename)

// console.log(obj)

// console.log(path.join(obj.dir,'foo','bar','2'))
// -------------------------------------------------------------------------------------
// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");
// const app = express();

// // app.use('/public', express.static(path.join(__dirname,'folder')));
// app.use(bodyParser.urlencoded({extended: false}));

// app.get('/', (req,res)=> {
//     res.sendFile(path.join(__dirname,'folder','index.html'));
// });

// app.post('/',(req,res)=>{
//     console.log(req.body);
//     res.send("Successfully posted!");
// });

// app.listen("3000");
// ====================================================================================================
// const path = require('path');
// const fs = require('fs');

// var filename = process.argv[2]; //This is simple the second argument passed
//                                 // while writing node app.js 
// var filePath = path.join(__dirname, filename,"nunu");
// console.log(filePath);
// ============================================================================================
// testing git

