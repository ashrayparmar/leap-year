var btnClick = document.querySelector("#btn");
var userName = document.querySelector("#name");
var outputDiv = document.querySelector("#output");
var birthYear = document.querySelector("#yearOfBirth");

function clickHandler() {

    var year = birthYear.value;

    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        outputDiv.innerText = "Hello " + userName.value + year + " is a leap year";
    }
	else {
        outputDiv.innerText = "Hello " + userName.value + year + " is not a leap year";
    }    
}

btnClick.addEventListener("click", clickHandler);