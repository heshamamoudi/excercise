"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const express_1 = require("express");
const bodyParser = require("body-parser");
const app = (0, express_1.default)();
const address = '0.0.0.0:5000';
app.use(bodyParser.json());
app.get('/', function (req, res) {
    // const book: Book = {
    //   id: 1,
    //   title: '1',
    //   author: '1',
    //   pages: '1',
    //   type_book: '1',
    //   summary: '1'
    // };
    // const object = new migrate_CRUD();
    // object.show('1');
    res.send("hello hesham");
});
app.listen(5000, function () {
    console.log(`starting app on: ${address}`);
});
