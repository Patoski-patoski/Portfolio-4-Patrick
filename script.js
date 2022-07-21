let day = document.getElementById("day");
let greeting;

switch (new Date().getDay()) {
  case 0:
    greeting = "Hey it's Sunday!!";
    break;
  case 1:
    greeting = "Monday!! Do you like Mondays?";
    break;
  case 2:
    greeting = "Tuesday is not the only day of the week containing the letter 'e' ";
    break;
  case 3:
    greeting = "Wed on Wednesday";
    break;
  case 4:
    greeting = "Today is Thursday";
    break;
  case 5:
    greeting = "Yo! I'ts Friyay-Friday";
  case 6:
    greeting = "Saturday is the coolest week ever";
    break;
}

let time = new Date();
let realTime = (document.getElementById("greet").innerHTML = time.getHours());

if (realTime >= 00 && realTime < 12) {
  document.getElementById("greet").innerHTML = "Good morning,";
} else if (realTime >= 12 && realTime < 18) {
  document.getElementById("greet").innerHTML = "Good Afternoon,";
} else {
  document.getElementById("greet").innerHTML = `Good evening, ${greeting}`;
}

function myFunction() {
  const time = new Date().toLocaleTimeString();
  document.getElementById("demo").innerHTML = time;
}
function myView() {
  const button1 = document.getElementById("button1");
  button1.addEventListener("mouseover", function () {
    let hello = document.getElementById("demo2");
    hello.innerHTML = "Hello! Hover me or click my parent";
    hello.style.color = "#ff9f29";
    button1.onclick = function () {
      let appear = document.querySelector(".display");
      appear.style.display = "block";
    };
    hello.onmousemove = function () {
      document.getElementById("demo2").style.color = "#ff9f29";
      let appear = document.querySelector(".display");
      appear.style.display = "block";
    };
  });
}
