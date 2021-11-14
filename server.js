import express from "express";
import bodyParser from "body-parser";
import path from "path";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false })

server.use(express.static('public'));

server.post('/feedback', urlencodedParser, function (req, res) {
    console.log(req.body);

    const publicPath = path.resolve(__dirname, 'public');

    res.sendFile('form-confirmation.html', {root: publicPath}, (err) => {
        res.end();
    });
})

server.listen(8080);
