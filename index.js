

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value;
    let BMI = (weight/(height*height)*1000)
    if (BMI <= 18.4) {
        document.getElementById("res").innerHTML = `Your BMI is ${BMI} which means you are UnderWeight  `
    }
    else if (BMI >= 18.5 && BMI <= 24.9) {
        document.getElementById("res").innerHTML = `Your BMI is ${BMI} which means you are Normal Weight  `
    }
    else if (BMI >= 25 && BMI <= 29.9) {
        document.getElementById("res").innerHTML = `Your BMI is ${BMI} which means you are Over Weight  `
    }
    else if (BMI >= 30) {
        document.getElementById("res").innerHTML = `Your BMI is ${BMI} which means you are Obese  `
    }
})
















