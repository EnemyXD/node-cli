#!/usr/bin/env node

const { randomInt } = require("crypto");
const readline = require("readline");

const input = readline.createInterface(process.stdin);

const random = randomInt(1, 100);
console.log("Загадано число от 0 до 100");

input.on("line", (args) => {
  random == args
    ? console.log("Верно!")
    : random > args
    ? console.log("Мало")
    : random < args
    ? console.log("Много")
    : console.log("Введите число!");
});
