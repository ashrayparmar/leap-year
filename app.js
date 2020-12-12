var btnClick = document.querySelector("#btn");
var userName = document.querySelector("#name");
var outputDiv = document.querySelector("#output");
var birthYear = document.querySelector("#yearOfBirth");

var date = 2;

function clickHandler() {

    var year = birthYear.value;


    if (year >= 1000 && year <= 9999) {

        if (year % 400 === 0 || year % 4 === 0) {
            outputDiv.innerText = "Hello " + userName.value + " " +year + " is an leap year, why not share it in Social Media 😉"; 
        } else if (year % 100 === 0) {          
          outputDiv.innerText = "Hello " + userName.value + " " + year + " is not leap year"; 
        }
        else {
            outputDiv.innerText = "Hello " + userName.value + " " + year + " is not leap year"; 
        }
      }
    else {
        outputDiv.innerText = "Hello " + userName.value + " Please enter proper value"; 
    }   
  }

btnClick.addEventListener("click", clickHandler);