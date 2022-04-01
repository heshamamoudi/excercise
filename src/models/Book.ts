// @ts-ignore
import client from '../database';

export type Book = {
  id: number;
  title: string;
  author: string;
  pages: number;
  type_book: string;
  summary: string;
};
export class migrate_CRUD {
  async index(): Promise<Book[]> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM books;';
      const result = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`cannot get book ${err}`);
    }
  }
  async show(id: number): Promise<Book> {
    try {
      const sql = `SELECT * FROM books WHERE id=${id}`;
      // @ts-ignore
      const conn = await client.connect();

      const result = await conn.query(sql);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find book ${id}. Error: ${err}`);
    }
  }

  async create(b: Book): Promise<Book> {
    try {
      const sql = `INSERT INTO books(title,author,pages,type_book,summary) VALUES('${b.title}', '${b.author}', ${b.pages},'${b.type_book}', '${b.summary}');`;
      // @ts-ignore
      const conn = await client.connect();

      const result = await conn.query(sql);

      const book = result.rows[0];

      conn.release();
      return book;
    } catch (err) {
      throw new Error(`Could not add new book ${b.title}. Error: ${err}`);
    }
  }
  async delete(id: number): Promise<Book> {
    try {
      const sql = `DELETE FROM books WHERE id=${id}`;
      // @ts-ignore
      const conn = await client.connect();

      const result = await conn.query(sql);

      const book = result.rows[0];

      conn.release();

      return book;
    } catch (err) {
      throw new Error(`Could not delete book ${id}. Error: ${err}`);
    }
  }
}
