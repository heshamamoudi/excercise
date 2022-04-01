"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("../Book");
const store = new Book_1.migrate_CRUD();
describe('Book Model', () => {
    describe('METHODS CHECK CRUD:', () => {
        it('should have an index method', () => {
            expect(store.index).toBeDefined();
        });
        it('should have a show method', () => {
            expect(store.show).toBeDefined();
        });
        it('should have a create method', () => {
            expect(store.create).toBeDefined();
        });
        it('should have a update method', () => {
            expect(store.index).toBeDefined();
        });
        it('should have a delete method', () => {
            expect(store.delete).toBeDefined();
        });
    });
    describe('CREATE CHECK:', () => {
        it('create method should add a book', () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield store.create({
                id: null,
                title: 'how to become a pro',
                pages: 90,
                author: 'hesham amoudi',
                type_book: 'educational',
                summary: 'web developer'
            });
            expect(result).toEqual({
                id: 1,
                title: 'how to become a pro',
                pages: 90,
                author: 'hesham amoudi',
                type_book: 'educational',
                summary: 'web developer'
            });
        }));
    });
    describe('returns first book :', () => {
        it('index method should return a list of books', () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield store.index();
            expect(result).toEqual(result);
        }));
    });
    describe('SEARCH FOR A BOOK:', () => {
        it('show method should return the correct book', () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield store.show(1);
            expect(result).toEqual({
                id: 1,
                title: 'how to become a pro',
                pages: 50,
                author: 'hesham amoudi',
                type_book: 'educational',
                summary: 'web developer'
            });
        }));
    });
    describe('DELETE A BOOK :', () => {
        it('delete method should remove the book', () => __awaiter(void 0, void 0, void 0, function* () {
            store.delete(1);
            const result = yield store.index();
            expect(result).toBeTruthy();
        }));
    });
});
