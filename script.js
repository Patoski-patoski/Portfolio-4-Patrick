let time = new Date();
let realTime = document.getElementById('greet').innerHTML = time.getHours();

if (realTime ==0 && realTime < 12) {
  document.getElementById('greet').innerHTML = 'Good Morning,';
  
} else if (realTime >= 12 && realTime < 18) {
  document.getElementById('greet').innerHTML = 'Good Afternoon,';
}
else {
  document.getElementById('greet').innerHTML = 'Good evening,';
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

