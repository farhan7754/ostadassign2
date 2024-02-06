const http = require('http');
const fs = require('fs');
const multer  = require('multer');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Log a message when the server starts listening on port 5500
    console.log('Server listening on port 5500');

    // Check the request URL and respond accordingly
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('This is Home Page');
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('This is About Page');
        res.end();
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('This is Contact Page');
        res.end();
    } else if (req.url === '/file-write') {
        // Use fs.writeFile() method to create a file and write text in it
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write('Error occurred while writing to file');
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('File demo.txt created and text "hello world" written successfully');
                res.end();
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Page not found');
        res.end();
    }
});

// Listen on port 5500
server.listen(5500);

// Multer configuration for file upload
const upload = multer({ dest: 'uploads/' });

// Example route for file upload
server.post('/upload', upload.single('file'), (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('File uploaded successfully');
    res.end();
});
const http = require('http');
const fs = require('fs');
const multer  = require('multer');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Log a message when the server starts listening on port 5500
    console.log('Server listening on port 5500');

    // Check the request URL and respond accordingly
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('This is Home Page');
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('This is About Page');
        res.end();
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('This is Contact Page');
        res.end();
    } else if (req.url === '/file-write') {
        // Use fs.writeFile() method to create a file and write text in it
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write('Error occurred while writing to file');
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('File demo.txt created and text "hello world" written successfully');
                res.end();
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Page not found');
        res.end();
    }
});

// Listen on port 5500
server.listen(5500);

// Multer configuration for file upload
const upload = multer({ dest: 'uploads/' });

// Example route for file upload
server.post('/upload', upload.single('file'), (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('File uploaded successfully');
    res.end();
});
