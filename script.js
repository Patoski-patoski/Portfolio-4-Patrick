function myFunction() {
  const time = new Date().toLocaleTimeString();
  document.getElementById("demo").innerHTML = time;
}

function myView() {
  const linkOne = document.getElementById("linkOne");
  linkOne.addEventListener('mouseover', function () {
  
    let reel = document.getElementById('demo2');
    reel.innerHTML = 'Hello! Hover me';
    
    reel.onclick = function () { 
      document.getElementById('demo2').style.color = '#ff9f29';
      let appear = document.getElementById('display');
      appear.style.display = 'block';

    }
        reel.onmouseover = function () {
          document.getElementById("demo2").style.color = "#ff9f29";
          let appear = document.getElementById("display");
          appear.style.display = "block";
          appear.addEventListener('mouseover', function () {
            let change = document.getElementById('index').style.color = '#ff9f29';
            change.addEventListener('mouseover', function () {
            document.getElementById("services").style.color = "#ff9f29";
              
            })
          })
          
    };
    
    

 



  })


}

//   linkOne = document
//  .getElementById("linkOne")
//     .addEventListener("mouseover", () => {
//      linkOne = document.getElementById("linkOne").style.color = "#FF9F29";
//       hove = document.getElementById("demo2").innerHTML =
//         "Hello! Hover Me!";
//       hove = document.getElementById("demo2").style.color = "#000";
//       hove = document.getElementById("demo2").onmouseover = function () {
//         document.getElementById("demo").style.color = "#FF9F29";
//         hover = document.getElementById("display").style.display = "block";
//       };
//       dove = document.getElementById("demo2").onmouseout = function () {
//         hover = document.getElementById("display").children[0].style.display = "flex";

//         mee = document.getElementById('index');
//         mee.style.display = "none";
//       }
//     });


