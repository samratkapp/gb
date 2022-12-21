"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBooks = void 0;
var getBooks = function getBooks(params) {
  return new Promise(function (resolve, reject) {
    fetch("https://www.googleapis.com/books/v1/volumes?key=AIzaSyA0hD2QmaO7_3jqR48YC-V-4SXTAaEfnZA&q=thanos".concat(params)).then(function (resp) {
      return resp.json();
    }).then(function (resp) {
      resolve(resp);
    })["catch"](function (err) {
      console.error('getBooks');
      reject(err);
    });
  });
};
exports.getBooks = getBooks;