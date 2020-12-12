var btnClick = document.querySelector("#btn");
var userName = document.querySelector("#name");
var outputDiv = document.querySelector("#output");
var birthYear = document.querySelector("#yearOfBirth");
var date = document.querySelector("#dateOfBirth");


function isPrime(date) {

    if (date === 2) {
      return true;
    } else if (date > 1) {
      for (var i = 2; i < date; i++) {
  
        if (date % i !== 0) {
          return true;
        } else if (date === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
  }

  console.log(isPrime(121));

function clickHandler() {

    var year = birthYear.value;

    // if(year >= 9999 || year <= 1000) {
    //     outputDiv.innerText = "Hello " + userName.value + " please enter a valid input"; 
    
    //     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    //         outputDiv.innerText = "Hello " + userName.value + year + " is a leap year";
    //     }
    //     else {
    //         outputDiv.innerText = "Hello " + userName.value + year + " is not a leap year";
    //     }    
    // }

    
     


    if (year >= 1000 && year <= 9999) {

        if (year % 400 === 0 || year % 4 === 0) {
            outputDiv.innerText = "Hello " + userName.value + year + " is an leap year, why not share it in Social Media "; 

        } else if (year % 100 === 0) {          
          outputDiv.innerText = "Hello " + userName.value + year + " is not leap year"; 
        }
        else {
            outputDiv.innerText = "Hello " + userName.value + year + " is not leap year"; 
        }
    }

    else {
        outputDiv.innerText = "Hello " + userName.value + "Please enter Year of birth in valid format"; 
    }   
}

btnClick.addEventListener("click", clickHandler);