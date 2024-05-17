import dotenv from 'dotenv';

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

import express from "express";
import ViteExpress from "vite-express";
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const port = 8080
ViteExpress.listen(app, port, () =>
    console.log(`Server is listening on port ${port}`),
);
