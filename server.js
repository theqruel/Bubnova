import express from "express";
import bodyParser from "body-parser";
import path from "path";
import Api from "@somethings/telegram-bot-api/Api.js";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const TOKEN = "2104135690:AAGNQRRhBlkAF8tV58t93Hgkj4F94DQWDkM";

const users = [
    45281573,
    58336254,
    79313350,
];

const api = new Api.default(TOKEN);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false })

server.use(express.static('public'));

function getMessage(form) {
    return `Имя: ${form.name}\nEmail: ${form.email}\nТелефон: ${form.phone}\nСообщение: ${form.message}`;
}

server.post('/feedback', urlencodedParser, function (req, res) {
    users.forEach((id) => {
        api.sendMessage({chat_id: id, text: getMessage(req.body)});
    });

    const publicPath = path.resolve(__dirname, 'public');

    res.sendFile('form-confirmation.html', {root: publicPath}, (err) => {
        res.end();
    });
})

server.listen(8080);
