/******************************** concat ********************************/

// It is used to combined one or more strings

// Syntax

// console.log(string1.concat(string2).concat(string3) ....)

// console.log(string1.concat(string1, string2, string3, ....))

let str1 = "Hello";
let str2 = ",";
let str3 = "My";
let str4 = "Name";
let str5 = "is";
let str6 = "Ram";
let str7 = "Sharma";
let str8 = " "; // it is just an space

console.log(
  str1.concat(
    str2,
    str8,
    str3,
    str8,
    str4,
    str8,
    str5,
    str8,
    str6,
    str8,
    str7
  )
);