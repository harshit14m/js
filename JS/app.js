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

// let age = 16;
// if(age>18){
//     console.log("you can vote")
// }else{
//     console.log("you cann't vote")
// }

// let firstName = "Harshit";
// if(firstName == "Harshit"){
//     console.log(`Welcome ${firstName} !!`)
// }

// let trafficLight = "Green";

// if(trafficLight === "Red"){
//     console.log(`Traffic Light is ${trafficLight}, please STOP`)
// }
// if(trafficLight === "Yellow"){
//     console.log(`Traffic Light is ${trafficLight}, please WAIT`)
// }
// if(trafficLight === "Green"){
//     console.log(`Traffic Light is ${trafficLight}, please GO`)
// }


// let marks = 30;
// if(marks>80){
//     console.log("A+")
// }else if(marks>60 && marks<80){
//     console.log("A")
// }else if(marks>33 && marks<60){
//     console.log("B")
// }else if(marks<33){
//     console.log("F")
// }

// let popcornSize = 's';
// if(popcornSize == 'xl'){
//     console.log("price is 250")
// }else if(popcornSize == "l"){
//     console.log("price is 200")
// }else if(popcornSize == "m"){
//     console.log("price is 100")
// }else if(popcornSize == "s"){
//     console.log("price is 50")
// }else{
//     console.log('wrong size')
// }

// let marks = 32;
// if(marks >= 33){
//     console.log("pass")
//     if(marks >= 80){
//         console.log("A++")
//     }else{
//         console.log("A")
//     }
// }else{
//     console.log("fail")
// }

// let str = "ample";

// if(str[0]==='a' && str.length>3){
//     console.log("good string")
// }else{
//     console.log("bad string")
// }

// let nu = 0;
// if(nu){
//     console.log("number is not zero")
// }else{
//     console.log("number is zero")
// }


// let color = "black"

// switch (color) {
//     case "red":
//         console.log("stop")
//         break;
//     case "yellow":
//         console.log("wait")
//         break;
//     case 'green':
//         console.log("go")
//         break;
//     default:
//         console.log("broken traffic light")
// }


// let numDay = 1;

// switch(numDay){
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday")
//         break;
//     default:
//         console.log("Wrong numDay")
// }

// let firstName =prompt("Enter your First Name");
// let lastName =prompt("Enter your Last Name");

// console.log(`Full Name is ${firstName + " " + lastName}`);

// let num = 1123440;
// if(num%10==0){
//     console.log("Good")
// }else{
//     console.log("bad")
// }

// let  userName = prompt("enter user name");
// let age = prompt("enter your age");
// alert(`${userName} is ${age} year old.`);

// let quater = 5;

// switch(quater){
//     case 1:
//         console.log("Jan, Feb, Mar")
//         break;
//     case 2:
//         console.log("Apr, May, Jun")
//         break;
//     case 3:
//         console.log("Jul, Aug, Sep")
//         break;
//     case 4:
//         console.log("Oct, Nov, Dec")
//         break;
//     default:
//         console.log("Wrong input")
// }

// let str = "apples"
// if((str[0]=="a" || str[0] == "A") && str.length>5)
//     console.log("Golden String");
// else{
//     console.log("bad string");
// }

// let num1 = 5;
// let num2 = 18;
// let num3 = 13;

// if(num1 > num2){
//     if(num1 > num3){
//         console.log("num1 is largest");
//     }else{
//         console.log("num3 is largest");
//     }
// }else {
//     if(num2 > num3){
//         console.log("num2 is largest");
//     }else{
//         console.log("num3 is largest");
//     }
// }
    
// let a = 323;
// let b = 47852;
// if(a % 10 == 2 && b % 10 == 2){
//     console.log("same last digit")
// }else{
//     console.log("different last digit")
// }
// let a = 3232342;
// let b = 4785232;
// if((a % 10) == (b % 10)){
//     console.log("same last digit")
// }else{
//     console.log("different last digit")
// }


// let msg = "     HELLO     "
// let newMsg = (msg.trim().toLocaleLowerCase());
// console.log(newMsg);


// let str = "ILoveCoding";
// console.log(str.slice(1,5));
// console.log(str.slice(5));
// console.log(str.slice(0,1));

// let str1 = "Hello";
// console.log(str1.slice(0, str1.length-1))
// console.log(str1.slice(-2));
// console.log(str1.slice());

// let str = "ILoveCoding";
// console.log(str.replace("Love", "Do"));
// console.log(str.replace("o", "x"));

// let str = "Mango";
// console.log(str.repeat(4));

// let msg = "     help!!!   ";
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);

// let nam = "ApnaCollege";
// console.log(nam.slice(4,9));
// console.log(nam.indexOf("na"));
// console.log(nam.replace("Apna", "Our"));

// let newNam = nam.slice(4).replace("l", "t");
// console.log(newNam.replace("l", "t"));

// console.log(nam.slice(4).replace('l', 't'). replace('l', 't'));

// let light = prompt("enter traffic light");

// if (light == "red") {
//     console.log("stop")
// }
// if(light == "yellow"){
//     console.log("wait");
// }
// if(light == "green"){
//     console.log("go");
// }

// let light = prompt("enter traffic light");

// if(light === "red"){
//     console.log("stop");
// }else if(light === "yellow"){
//     console.log("wait");
// }else if(light === "green"){
//     console.log("go")
// }else{
//     console.log("broken traffic light");
// }


// let marks = prompt("enter marks");

// if(marks >= 80){
//     console.log("A+ grade");
// }else if(marks >= 60 && marks <80){
//     console.log("A grade")
// }else if(marks >= 33 && marks < 60){
//     console.log("B grade")
// }else{
//     console.log("F grade");
// }

// let size = prompt("Enter popCorn price");
// if(size == 'xl'){
//     console.log(250);
// }else if( size == "l"){
//     console.log(200);
// }else if(size == "m"){
//     console.log(100);
// }else if(size == "s"){
//     console.log(50);
// }else {
//     console.log("wrong choice");
// }

// let marks = prompt("enter your marks");
// if(marks >= 33){
//     console.log("pass")
//     if(marks>=80){
//         console.log("Outstanding");
//     }else{
//         console.log("Grade: A");
//     }
   
// }else{
//     console.log("fail");
// }

// let lightCol = prompt("enter color of traffic light");

// switch (lightCol) {
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("wait");
//         break;
//     case "green":
//         console.log("go");
//         break;
//     default:
//         console.log("broken light")
//         break;
// }

// let numDay = prompt("enter number of day");
// Number(numDay);

// let numDay = 3;

// switch(numDay){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2: 
//         console.log("Tuesday");
//         break;
//     case 3: 
//         console.log("Wednesday");
//         break;
//     case 4: 
//         console.log("Thrusday");
//         break;
//     case 5: 
//         console.log("Friday");
//         break;
//     case 6: 
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("wrong input");
//         break;
// }

// let numb = prompt("enter your number");
// if(numb%10 == 0){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// let userName = "Harshit";
// let age = 12;
// console.log(`${userName} is ${age} year old kid`)

// let num = prompt("enter number");

// if(num % 10 == 0){
//     console.log("good")
// }else{
//     console.log("bad")
// }


// let userName = prompt("enter your name");
// let userAge = prompt("enter your age");

// alert(`${userName} is ${userAge} year old.`);

// let quater = prompt("enter quater");

// switch (parseInt(quater)){
//     case 1:
//         console.log("January, February, March");
//         break;
//     case 2:
//         console.log("April,May,June");
//         break;
//     case 3:
//         console.log("July,August,September");
//         break;
//     case 4:
//         console.log("October,November,December");
//         break;
//     default:
//         console.log("wrong input");
// }

// let myStr = prompt("enter your string");

// if((myStr[0] == "A" || myStr[0] == "a") && myStr.length > 5){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// let a = 2;
// let b = 18;
// let c = 213;

// if(a > b && a > c){
//     console.log("a");
// }else if(b > a && b > c){
//     console.log("b");
// }else if(c > b && c > a){
//     console.log("c");
// }else{
//     console.log("wrong input");
// }

// let a = 5;
// let b = 18;
// let c = 13;

// if (a > b) {
//     if (a > c) {
//         console.log(a, "is largest");
//     } else {
//         console.log(c, "is largest");
//     }
// } else {
//     if (b > c) {
//         console.log(b, "is largest");
//     } else {
//         console.log(c, "is largest");
//     }
// }


// let num1 = 134;
// let num2 =5664;

// if(num1%10 == num2%10){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// let name = "Harshit";
// console.log(name.indexOf("h"));
// console.log(name.indexOf("H"));
// console.log(name.indexOf("z"));

// let msg = "     Hello        ";
// console.log(msg.trim().toUpperCase());
// console.log(msg.trim().slice(-3));

// let mesg = "iLoveCoding";
// console.log(mesg.replace("Love", "Do"));
// console.log(mesg);

// let mess = "Harshit Sharma ";
// console.log(mess.repeat(5));

// let messa = "     Help!   ";
// console.log(messa.trim().toUpperCase());

// let name1 = "ApnaCollege";
// console.log(name1.slice(4, 9));              // Colle
// console.log(name1.indexOf("na"));            //2
// console.log(name1.replace("Apna", "Our"));   //OurCollege
// console.log(name1.repeat(3));                // ApnaCollegeApnaCollegeApnaCollege
// console.log(name1.replace("apna", "Our"));   // Original String

// let name2 = "Harshit Shamra";
// console.log(name2.replace("Harshit", "Goldy"));

// let name1 = "ApnaCollege";
// let result  = name1.slice(4).replace("l", "r").replace("l", "r");
// console.log(result);

// let students = ["aman", "shradha", "rajat", "shyam"];
// console.log(students);
// students[1] = "Harshit Sharma"
// console.log(students);
// students[4] = "rohit";
// console.log(students);

// students[10] = "virat";
// console.log(students);
// console.log(students[1]);
// console.log(students[1][4]);
// console.log(students.length);
// console.log(students[1].length);

// let emptyArr = [];
// console.log(emptyArr.length);

// let start = ["january", "july", "march", "august"];
// start[0] = "july";
// start[1] = "june";
// start[1] = "june";
// console.log(start);

// let cars = ["audi", "bmw", "xuv", "maruti"];
// cars.push("toyota");
// console.log(cars);
// cars.push("ferrari", "indica");
// console.log(cars);
// console.log(cars.pop());
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.unshift("toyota");
// console.log(cars);
// cars.shift();
// console.log(cars);
// cars.unshift("toyota", "ferrari");
// console.log(cars);

// let months = ["january", "july", "march", "august"];
// months.shift();
// months.shift();
// // months.unshift("june");
// // months.unshift("july")
// months.unshift("july", "june");
// console.log(months);


// let primary = ["red", "yellow", "blue"];
// console.log(primary.indexOf("yellow"));
// console.log(primary.indexOf("Yellow"));
// console.log(primary.findIndex("yellow"));
// console.log(primary.includes("red"));
// console.log(primary.includes("Red"));
// console.log(primary.includes("green"));

// let primary = ["red", "yellow", "blue"];
// let secondary = ["orange", "green", "violet"];
// let reslt = primary.concat(secondary)
// console.log(reslt);
// console.log(reslt.reverse());
// console.log(secondary.concat(primary));

let colors = ["red", "yellow", "blue", "orange", "green", "violet"];
// console.log(colors.slice());
// console.log(colors.slice(2));
// console.log(colors.slice(2, 3));
// console.log(colors.slice(-3));

// console.log(colors);                 // "red", "yellow", "blue", "orange", "green", "violet"
// console.log(colors.splice(4));       // "green", "violet"
// console.log(colors);                 // "red", "yellow", "blue", "orange"
// console.log(colors.splice(0,1));     // "red"
// console.log(colors);                 // "yellow", "blue", "orange"
// console.log(colors.splice(0, 1, "black", "grey")); // "yellow"
// console.log(colors);                     // "black", "grey", "blue", "orange"

// let cars = ["bmw", "ferrari"];
// console.log(cars.splice(0,0,"maruti", "toyota")); // []
// console.log(cars);                                // "maruti", "toyota", "bmw", "ferrari"
// console.log(cars.splice(1,0,"tata"));   // []
// console.log(cars);                      // "maruti", "tata", "toyota", "bmw", "ferrari"
// console.log(cars.splice(1,1,"fiat")); // tata
// console.log(cars);                    // "maruti", "fiat", "toyota", "bmw", "ferrari"

// let start = ["january", "july", "march", "august"];
// // console.log(start.splice(0,1)) // ["january"]
// // console.log(start); // ["july", "march", "august"]
// // console.log(start.splice(1,0,"June")); // []
// // console.log(start); //["july", "June", "march", "august"]
// console.log((start.splice(0,2,"July", "june")));
// console.log(start);

// let lang = ['c', 'c++', "html", "javascript", "python", "java", 'c#', "sql"];
// // let newLang = lang.reverse();
// // console.log(newLang);
// // console.log(newLang.indexOf("javascript"));
// console.log(lang.reverse().indexOf("javascript"));

// let arr = ['a', 'b', 'c'];
// let arrCopy = arr;
// console.log(arrCopy);
// console.log(arrCopy.push('d'));
// console.log(arr);
// arr.pop('d');
// console.log(arr);
// arr.pop('b');
// console.log(arr);
// console.log(arrCopy)

// let arr = [[1,2], [3,4], [5,6], [7,8]];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[1][0]);
// arr.push([11,12, 13]);
// console.log(arr.length);
// console.log(arr[4]);
// console.log(arr[4][2])
// console.log(arr);
// arr.pop();
// console.log(arr);

// let tic = [["x",null, "o"], [null, "x", null], ["o", null, "x"]]
// console.log(tic);

// tic[0][1]="o";
// console.log(tic);

// let arr = [7, 9, 0, -2, 3]; // 7,9,0
// console.log(arr);
// let newArr = [];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>=0){
//         newArr[i] = arr[i];
//     }
// }
// console.log(newArr);

// newArr.splice(3,1);
// console.log(newArr);
// let newArr = arr.slice(0,3);
// console.log(newArr);

// let arr = [7, 9, 0, -2];
// let res = arr.slice(-3);
// console.log(res);

// let str = prompt("please enter string");

// if(str.length == 0){
//     console.log("Blank string");
// }else{
//     console.log("String", str);
// }

// let str = "ApNACoLlEge"
// let idx = 3;
// if(str[idx] == str[idx].toLowerCase()){
//     console.log("character is lower case");
// }else{
//     console.log("character is upper case");
// }

// let arr = ["hello", 'a', 23, 64, 99, -6];
// let item = 641;
// if(arr.indexOf(item) != -1){
//     console.log("exist");
// }else{
//     console.log("not exist");
// }

// let arr = [7, 9, 0, -2];
// let n = 3;
// let newArr = arr.slice(0,n);
// console.log(newArr);

// let newArr = arr.slice(-3)
// let n = 3;
// let newArr = arr.slice(arr.length-n)
// console.log(newArr);

// let str = prompt("enter your string");

// if(str.length == 0){
//     console.log("blank");
// }else{
//     console.log("not blank")
// }

// let str = "hArShiT ShaRMa";
// let n = 3;
// if(str[n]==str[n].toLowerCase()){
//     console.log("lower");
// }else{
//     console.log("Upper")
// }

// let arr = ["hello", 'a', 64, 99, -2, 0];
// let item = 64;

// if(arr.indexOf(item) != -1){
//     console.log("present");
// }else{
//     console.log("absent");
// }

// for (let i =1; i<=10; i++){
//     console.log(i);
// }

// for(let j = 10; j>=1; j--){
//     console.log(j)
// }

// for(let i = 0; i<=15; i+=2){
//     console.log(i);
// }
// for(let i = 15; i>=1; i-=2){
//     console.log(i);
// }

// let n = prompt("table of: ");
// n = parseInt(n);
// for(let i = 1; i<=10; i++){
//     console.log(`${n} X ${i} = ${n*i}`);
// }