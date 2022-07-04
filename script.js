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
            appear.addEventListener('mouseover', function () {
            document.getElementById("services").style.color = "#ff9f29";
              
            })
          })
          
    };
    
    

 



  })


}


