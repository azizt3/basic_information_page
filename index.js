// included HTTP module in order to create HTTP server
const http = require('http');

// included path module in order to manipulate and work with file path/directory 
const path = require('path');

// included file.system module to work with file names
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'),
        (err, content) => {
        if (err) throw err
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(content)

        })

    } else if (req.url === '/about.html') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'),
        (err, content) => {
        if (err) throw err
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(content)
        })

    } else if (req.url === '/contact-me.html') {
        fs.readFile(path.join(__dirname, 'public', 'contact-me.html'),
        (err, content) => {
        if (err) throw err
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(content)
        })
    
    } else {
        fs.readFile(path.join(__dirname, 'public', '404.html'),
        (err, content) => {
        if (err) throw err
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(content)
        })
    }
    });

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log(`server running on port ${PORT}`));
        
        
        
        


    
        

        
    

    // let filePath = path.join( __dirname, 'basic_information_page',
    // (req.url === '/') ? 'index.html' : req.url);
 
    // // gives extension name (.html, .css, etc)

    // let extName = path.extname(filePath);

    // let contentType ='text/html';

// Server reads the file and displays some content. If the file does not exist, then
// an error (err) is shown. When this happens, it automatically opens 404.html
// response.writehead returns a status code to the brower. In this case the status 
// would be 200 despite there being an error. This is because we are asking the server to
// put up the 404.html page. So technically, the request did go through.

// fs.readFile(filePath,  (err, content) =>{
//     if (err){

//         fs.readFile(path.join(__dirname, 'basic_information_page', '404.html'),
//         (err,content) => {
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.end(content, 'utf8');

//         })
    
//     } else {

//         res.writeHead(200, {'Content-Type': contentType });
//         res.end(content, 'utf8');
//     }

// });

