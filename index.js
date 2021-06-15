#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
console.log(argv);

const date = new Date();
const currentYear = date.getFullYear();
const currentDay = date.getDate();
const currentMonth = date.getMonth() + 1;

if (argv._[0] === "current") {
  argv.y ? console.log(currentYear) : argv.year && console.log(currentYear);
  argv.m ? console.log(currentMonth) : argv.month && console.log(currentMonth);
  argv.d ? console.log(currentDay) : argv.day && console.log(currentDay);
  !argv.y &&
    !argv.year &&
    !argv.m &&
    !argv.month &&
    !argv.d &&
    !argv.day &&
    console.log(date);
}

if (argv._[0] === "add") {
  argv.d
    ? date.setDate(date.getDate() + argv.d)
    : argv.day && date.setDate(date.getDate() + argv.day);
  argv.m
    ? date.setMonth(date.getMonth() + argv.m)
    : argv.month && date.setMonth(date.getMonth() + argv.month);
  argv.y
    ? date.setFullYear(date.getFullYear() + argv.y)
    : argv.year && date.setFullYear(date.getFullYear() + argv.year);
  console.log(date);
}

if (argv._[0] === "sub") {
  argv.d
    ? date.setDate(date.getDate() - argv.d)
    : argv.day && date.setDate(date.getDate() - argv.day);
  argv.m
    ? date.setMonth(date.getMonth() - argv.m)
    : argv.month && date.setMonth(date.getMonth() - argv.month);
  argv.y
    ? date.setFullYear(date.getFullYear() - argv.y)
    : argv.year && date.setFullYear(date.getFullYear() - argv.year);
  console.log(date);
}
