let holdNumber = Math.floor(Math.random()*101);
console.log(holdNumber);

let takenNumber = document.getElementById("number");
// console.log(takenNumber);

let counter = 0 ;
let magicHat = document.getElementById("hat");
let resultNumber = document.getElementById("r_number");
let attemptNumber = document.getElementById("attempt");
let buttonCheck = document.getElementById("c_button"); 

buttonCheck.addEventListener("click", () => {
    while (true) {
        if (holdNumber > Number(takenNumber.value)) {
            alert(`Lütfen girdiğiniz sayı ${takenNumber.value} ile 100 arasında olsun`);
            counter++;
            break;
        } else if (holdNumber < Number(takenNumber.value)){
            alert(`Lütfen girdiğiniz sayı 0 ile ${takenNumber.value} arasında olsun`);
            counter++;
            break;
        } else {
            counter++;
            img.style.display = "block";
            (attemptNumber).innerHTML = "Number of attempts : " + counter;
            (resultNumber).innerHTML = "Holden number is: " + holdNumber;
            break;
        }   
    };

});






