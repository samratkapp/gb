"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleExeption = void 0;
/* eslint-disable no-undef */
var sendNotificationMail = function sendNotificationMail(message, err) {
  console.log('Some Notification Logic', message, err);
};
var handleExeption = function handleExeption() {
  process.on('exit', function (error) {
    console.error('exit at:', new Date(), '\nMessage:', error.stack);
    sendNotificationMail('', error.stack);
    process.exit(1);
  });
  process.on('unhandledRejection', function (error) {
    console.error('Unhandled Rejection at:', new Date(), '\nMessage:', error.stack);
    sendNotificationMail('', error.stack);
    process.exit(1);
  });
  process.on('uncaughtException', function (error) {
    console.error('UncaughtException at:', new Date(), '\nMessage:', error.stack);
    sendNotificationMail('', error.stack);
    process.exit(1);
  });
};
exports.handleExeption = handleExeption;