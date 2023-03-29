// // const http = require("http");
// // const app=express()

// // // const Server = http.createServer(function(req, res){
    
// // //     res.write("<mark>kiu</mark>");
// // //     res.end();
// // //     // res.write("<h1>This is My First Server</h1>");

// // // })


// // app.get('/',(req, res)=>{
// //     res.send("<mark>kiu</mark>");
// // })
// // Server.listen(8080,()=>console.log('server is running...'));


// const express = require('express');
// const app = express();


// app.get('/',function(req,res){
//     res.send('<mark>kiu</mark>')
// })


// app.listen(8080,()=>console.log('Server is running.....'))



//////////////////////////////////////////////////////////////

// const http = require('http');



// const server = http.createServer((req, res) => {
 
//     res.write("<h1>Hello World</h1>")

  
// });


// server.listen(1433, () => {
//   console.log(`Server listening on port`);
// });



const http = require("http");



const sever = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write(
        JSON.stringify({
          message:
            "Nodejs is a JavaScript runtime built on Chromes V8 JavaScript engine1 It allows you to run JavaScript on the serverside It provides several built-in modules that can be used to create web servers, handle HTTP requests and responses, and process data",
            
        })
      );
      res.end();
    } else if (req.url === "/home") {
      res.write("THE HOME PAGE");
      res.end();
    } else if (req.url === "/about") {
      res.write("THE ABOUT PAGE");
      res.end();
    }
  })
 .listen(8080,()=>{console.log("Server listening on 8080...")});