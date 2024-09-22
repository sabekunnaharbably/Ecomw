

let gender = "Male"
let area = "Dhaka"
let age = 18




let data = document.querySelector("input")

let button = document.querySelector("button")

let result = document.querySelector("h1")



button.addEventListener("click", function () {

    if (data.value >=21 ) {

        result.innerHTML = "Beye Koro"



    }
    else {

        result.innerHTML = "Tomi Shisho"

    }





})



