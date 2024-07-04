let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");
let progressStartValue = 0,    
    progressEndValue =10,    
    speed = 100;
    
let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }