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
// git setup done 
// ===========================================================================================


// item_array = ["item1", "item2", "item3"];
// person = {
//     name: "Gursahib",
//     gender: "male",
//     id: 1234
// }
// //works in context to second.js  
// //Will eventually have more practice with exporting modules 
// module.exports = {
//     item_array,
//     person
// };
// ---------------------------------------------------------------------
// //PATH
// const path = require('path');

// const file_path = path.join('/content','abc_folder','text.txt');
// console.log(file_path);
// //basically path.join method concatenates whatever structure name is 
// // given to it in a forward order

// const base = path.basename(file_path); //returns the last directory in path
// console.log(base); 

// const absolute = path.resolve('folder', 'my_doc.txt');
// console.log(absolute); //.resolve() method concatenates and gives the absolute path 

// -----------------------------------------------------------------------
// ReadFile and WriteFile Sync

// const fs = require('fs');

// const first = fs.readFileSync('./folder/sample.txt', 'utf8');
// const second = fs.readFileSync('./folder/second.txt', 'utf8');

// console.log(first);
// console.log(second);
// console.log("Oye pols aa gyi pols!!");

// -----------------------------------------------------------------------------------------
// Express
// const express = require("express");
// const app = express();

// app.get('/', (req,res) => {
//     res.status(200).send("Home Page");
// })

// app.get('/about', (req,res) => {
//     res.status(200).send("About Page");
// })

// app.all('*', (req,res) => {
//     res.status(404).send("<h2>Resource not found!</h1>");
// })


// app.listen("5000", ()=> {
//     console.log("The server is listening on port 5000...");
// })
// --------------------------------------------------------------------------------

// const express = require('express');
// const app = express();

// //Middleware
// const logger = require('./logger');
// app.use(logger); //app.use() invokes the middleware for all the routes (app.get....)

// //So instead of putting the logger function within all the get requests
// //We can simply just PUT THE MIDDLEWARE IN APP.USE()

// // app.get('/', logger,(req,res) => {
// //     res.send("Home Page");
// // })

// // app.get('/about', logger, (req,res) => {
// //     res.send("About Page");
// // })

// app.get('/',(req,res) => {
//     res.send("Home Page");
// })

// app.get('/about', (req,res) => {
//     res.send("About Page");
// })
// app.listen("5000", () => {
//     console.log("Running on server 5000...");
// });

// -------------------------------------------------------------------------------------------

const express = require('express');
const app = express();
let {people} = require('./data');


app.get('/api/people', (req,res) => {
    res.status(200).json({success: true, data: people})
})

app.listen('5000', () => {
    console.log("Server is listening on port 5000...");
})