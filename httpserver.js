const http =require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req , res)=>{
     res.statusCode =200;
     res.setHeader('Content_Type', 'text/html')
     res.end('<h1>This is ayush !!! </h1> <p> Hey catch me if you can </p>');
})

server.listen(port , ()=>{
    console.log(`Server is listening on port ${port}`)
});