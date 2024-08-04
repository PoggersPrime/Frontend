// var i = 1;
// do {
//   document.write(i);
//   i++;
// } while (i <= 10);

// for (var i = 0; i <= 10; i++) {
//   document.write(i);
// }

// document.getElementById("demo").innerHTML ="hello world this is me";

var x = [
  12,
  "hello",
  {
    name: "yuresh",
    age: 16,
    class: 12,
    location: ["pokhara", "kathmandu"],
  },
  function greet() {
    console.log("Hello");
  },
];
console.log(x[2].location[1]);
// console.log(x[3]);

// var x = document.getElementsByClassName("new");

// document.getElementById("new").innerHTML =
//   x[0].innerHTML + " " + x[1].innerHTML + " " + x[2].innerHTML;

// document.getElementsByTagName("h1")[0].innerHTML = "hello worldo hotto";

// document.querySelector("#demo").innerHTML = "hello world";
// document.querySelector(".new").innerHTML = "hello world";

// document.querySelectorAll(".new").innerHTML = "hello world okiki";
// var ok = document.getElementById("new");
// ok.style.backgroundColor = "red";
// ok.style.padding = "2rem";

// {
//   const x = 20;
//   console.log(x);
// }
// {
//   const x = 80;
//   alert(x);
// }

// function okol() {
//   const x = 20;
//   // alert(x);
//   function okop() {
//     const y = 20;
//     console.log(y);
//   }

//   okop();
// }
// okol();
// var y = "10";
// function aalu() {
//   console.log(x)
//  function nooo(){
//   var x = 10
//   console.log(x);
//  }
//  nooo()
// }
// aalu();
// var z = x > y;
// console.log(!z);

// var x = 10;
// var y = 10;
// var z = 8;
// var a = 7;
// ++x;  pre increment
// x++;  post increment
// x++
// x += y; // x = x+y;
// x -= y; // x = x-y
// console.log();

// if (x < y) {
//   document.write("nice job" + "</br>");
// } else {
//   document.write("get lost");
// }
// if (x < y) {
//   document.write("nice job" + "</br>");
//   if (x < 20) {
//     document.write("noice2");
//   } else {
//     document.write("get lost");
//   }
// } else if (x == y) {
//   document.write("oh no");
// } else {
//   document.write("get lost");
// }

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Mon";
    break;
  case 2:
    day = "Tue";
    break;
  case 3:
    day = "WED";
    break;
  case 4:
    day = "Thr";
    break;
  case 5:
    day = "FRI";
    break;
  case 6:
    day = "SAT";
    break;
}
document.write(day);
document.write("<br>" + new Date().getDay());
document.write("<br>" + new Date().getMonth());
document.write("<br>" + new Date().getFullYear());
