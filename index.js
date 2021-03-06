const fs = require('fs');
const http = require('http');
const url = require('http');


// ///////////////////////////////////////
// FILES

// Blocking, synchronous way
// const textIn = fs.readFileSync('/Users/hizzle302/code diff/udemy_project/complete-node-bootcamp/1-node-farm/final/txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync('/Users/hizzle302/code diff/udemy_project/complete-node-bootcamp/1-node-farm/final/txt/output.txt', textOut);
// console.log('File written');

//  Non-blocking, asynchronous way
// fs.readFile('/Users/hizzle302/code diff/udemy_project/complete-node-bootcamp/1-node-farm/final/txt/start.txt', 'utf-8', (err, data1) => {
    
//     fs.readFile(`/Users/hizzle302/code diff/udemy_project/complete-node-bootcamp/1-node-farm/final/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('/Users/hizzle302/code diff/udemy_project/complete-node-bootcamp/1-node-farm/final/txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3);

//     fs.writeFile('/Users/hizzle302/code diff/udemy_project/complete-node-bootcamp/1-node-farm/final/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('Your file has been written 😁');
//     })
//     });
// });
// });
// console.log('Will read file');



// ///////////////////////////////////////
// SERVER

const server = http.createServer((req, res) => {
   const pathName = req.url;

   if(pathName === '/' || pathName === '/overview') {
    res.end('This is the OVERVIEW');
   } else if (pathName === '/product') {
       res.end('This is the PRODUCT');

   } else if (pathName === '/api') {

    fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
        const productData = JSON.parse(data);
        console.log(productData);
    });

    res.end('API');
   } else {
       res.writeHead(404, {
           'Content-tpe': 'text/html',
           'my-own-header': 'hello-world'
       });
       res.end('<h1>Page not found</h1>');
   }

    
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requsets on port 8000');
});







