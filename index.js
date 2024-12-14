import "./utils/env.js"
import express from "express"
import "express-openid-connect"
import { jwtCheck} from "./utils/auth.js"
import {client, run} from "./utils/db.js"
const app = express();

const port = process.env.PORT || 8080;

app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.listen(port);

console.log('Running on port ', port);

