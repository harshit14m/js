// "use strict";
// let name; // declaration
// name = "HarshitSharma"; // assign value to variable
// console.log(name);

// let firstName = "ShriRam";
// console.log(firstName); // declare the variable and assign the value to it

// "use strict";
// let x = 13;
// delete x;
// console.log(x);

// function exmple (x,y){
//     console.log(x);
//     console.log(y)
// };
// exmple(1, 14);



// "use strict";
// function exmple (x,x){
//     console.log(x);
//     console.log(x)
// };
// exmple(1, 15);

// let public = 5;
// console.log(public);

// function example(){
//     "use strict"
//     y = 10;
//     console.log(y);
// }

// example();

// let num = 10;
// num = "Harshit Sharma";
// console.log(num);

// let anotherString = "This is ";
// let str1 = anotherString + 'First String';
// let str2 = anotherString + "Second String";
// let str3 = `${anotherString}Third String`;
// console.log(str1);
// console.log(str2);
// console.log(str3);

// let str = "Hello\nworld";
// let str = 'I\'m Harshit';
// let str = 'I"m Harshit';
// let str = "I'm Harshit";
// let str = 'This is backslash \\.';
// let str = '\tThis is backslash \\.';
// let str = '\x61';
// let str = "\u0026";
// let str = "\u{1F60E}";
// console.log(str);

// let str = "My name is Harshit\n";
// console.log(str);
// console.log(str.length);
// console.log(str.charAt(0));
// console.log(str[5]);
// console.log(str.charAt(20)); // empty string
// console.log(str[25]); // undefined

// let str = "Hello";
// console.log(str[0]);
// str[0] = "M";
// console.log(str);
// str = "M"+str[1]+str[2]+str[3]+str[4]
// console.log(str);

// let str = "For Hello World";
// console.log(str.indexOf("hello"));
// console.log(str.indexOf("z"));
// console.log(str.indexOf("Hello"));
// console.log(str.indexOf("o"));
// console.log(str.indexOf("o", 2));
// console.log(str.indexOf("o", 9));
// console.log(str.indexOf("o", 12));

// console.log(str.lastIndexOf("o")); //3 11
// console.log(str.lastIndexOf("o", 9)); //6 8
// console.log(str.lastIndexOf("o", 7)); //13 1
// console.log(str.lastIndexOf("o", 0)); //-1 -1


// let str = "For Hello World";
// console.log(str.includes("o"));
// console.log(str.includes("Hello"));
// console.log(str.includes("hello"));
// console.log(str.includes(" H"));
// console.log(str.includes("o", 3));
// console.log(str.includes("o", 12));

// let str = "For Hello World";
// console.log(str.startsWith("F"));
// console.log(str.startsWith("f"));
// console.log(str.startsWith("For"));
// console.log(str.startsWith("for"));
// console.log(str.startsWith("Hello"));
// console.log(str.startsWith("For Hello"));

// let str = "For Hello World";
// console.log(str.endsWith("d"));
// console.log(str.endsWith("ld"));
// console.log(str.endsWith("D"));
// console.log(str.endsWith("World"));
// console.log(str.endsWith("world"));
// console.log(str.endsWith("o"));
// console.log(str.endsWith("Hello World"));
// console.log(str.endsWith("Hello"));

// let str = "paragraph";
// console.log(str.slice(0,4));
// console.log(str.slice(4));
// console.log(str.slice(4, str.length));
// console.log(str.slice(-4, -2)); //5 7
// console.log(str.slice(-5, -1));
// console.log(str.slice(-5));

// let str = "paragraph";
// console.log(str.slice(2,4));
// console.log(str.substring(2,4));
// console.log(str.slice(4,2));
// console.log(str.substring(4,2));
// console.log(str.slice(-4,-2));
// console.log(str.substring(-4,-2)); //(0,0)
// console.log(str.substring(-4,2)); //(0,2)

// let str = "paragraph";
// console.log(str.substr(2,3));
// console.log(str.substr(-5,3));

// console.log("A".codePointAt(0));
// console.log("&".codePointAt(0));
// console.log(String.fromCodePoint(214));

// let nam = "Tony";
// console.log(nam[0]);
// console.log(nam[1]);
// console.log(nam[2]);
// console.log(nam[3]);

// let nam = "Tony Stark"
// console.log(nam.length);
// console.log(nam[nam.length-1])

// let firstName = "Tony";
// let lastName = "Stark"
// let fullName = firstName + " " + lastName;
// console.log(fullName);
// let fullName = "Harshit Sharma";
// console.log(fullName.length);

// let firstName = "HarshitS";
// console.log(firstName[0]);
// console.log(firstName[firstName.length-1]);

// let str = " ";
// console.log(typeof(str));
// console.log(str.length);