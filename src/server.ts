// @ts-ignore
import express from 'express';
import * as bodyParser from 'body-parser';
import { Book, migrate_CRUD } from './models/Book';

const app: express.Application = express();
const address: string = '0.0.0.0:5000';

app.use(bodyParser.json());

app.get('/', function (req: express.Request, res: express.Response) {
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
  res.send('hello hesham');
});

app.listen(5000, function () {
  console.log(`starting app on: ${address}`);
});
