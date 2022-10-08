// included HTTP module in order to create HTTP server
const http = require('http');

// included path module in order to manipulate and work with file path/directory 
const path = require('path');

// included file.system module to work with file names
const fs = require('fs');

//creates http server. Takes in a request, returns some sort of result
const server = http.createServer((req, res) => {

// if the requested url is / or /index.html then read the file with the address
// "current directory index.js is in"/"public"/the actual file name". If all is good, then
// give a 200 message, the webpage will launch.

    if (req.url === '/' || req.url === '/index.html') {
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
    
// any other url request should return a 404.error page since it does not actually exist
// within our website.

    } else {
        fs.readFile(path.join(__dirname, 'public', '404.html'),
        (err, content) => {
        if (err) throw err
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(content)
        })
    }
    });

// establish the PORT #, server.listen starts the actual server we defined above.

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log(`server running on port ${PORT}`));