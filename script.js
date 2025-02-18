    const clear = document.querySelector(".clear");
    const divideNum = document.querySelector(".divide");
    const product = document.querySelector(".product");
    const deleteElement = document.querySelector(".delete");
    const seven = document.querySelector(".seven");
    const eight = document.querySelector(".eight");
    const nine = document.querySelector(".nine");
    const minus = document.querySelector(".minus");
    const four = document.querySelector(".four");
    const five = document.querySelector(".five");
    const six = document.querySelector(".six");
    const plus = document.querySelector(".plus");
    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    const equal = document.querySelector(".equal");
    const percent = document.querySelector(".percent");
    const zero = document.querySelector(".zero");
    const point = document.querySelector(".point");
    const allButtons = document.querySelectorAll(".divide, .product, .seven, .eight, .nine, .minus, .four, .five, .six, .plus, .one, .two, .three, .percent, .zero, .point");
    const screen = document.querySelector("#screen");

    function subtract (num1, num2){
        return num1 - num2;
    }
    function add (num1, num2){
        return num1 + num2;
    }
     
    function divide (num1, num2) {
        if (num1 === 0 || num2 === 0) return 0;
        
        return num1/num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    

    let resultFormula = [];
    let heavyResult = [];
    let result = 0;
    allButtons.forEach(button => {
    button.addEventListener("click", () => {
        resultFormula.push(button.textContent);
        screen.textContent = resultFormula.join("");

        console.log(resultFormula);
    })
  });

  equal.addEventListener("click", () => {
    for (let j = 0; j < resultFormula.length; j++){
        if (j > 0 && !isNaN(resultFormula[j]) && !isNaN(resultFormula[j - 1])){
            resultFormula.splice(j - 1, 2, resultFormula[j - 1].toString() + resultFormula[j].toString());
            j -= 1;
        }
    }
    for (let l = 0; l < resultFormula.length; l++){
        if (resultFormula[l] === "."){
            resultFormula.splice(l - 1, 3, resultFormula[l - 1].toString() + resultFormula[l].toString() + resultFormula[l + 1].toString());
            l -= 2;
        }
    }
    for (let m = 1; m < resultFormula.length; m++) {
        if (resultFormula[m] === "-" && (resultFormula[m - 1] === "X" || resultFormula[m - 1] === "+" || resultFormula[m - 1] === "÷")) {
            resultFormula.splice(m, 2, resultFormula[m].toString() + resultFormula[m + 1].toString());
            m -= 1;
        }
        else if (resultFormula[0] === "-") {
            resultFormula.splice(0, 2, resultFormula[0].toString() + resultFormula[1].toString())
            m -= 1;
        }
    }



    for (let i = 0; i < resultFormula.length; i++){
        if (resultFormula[i] === "÷"){
            let newResult = divide(parseFloat(resultFormula[i - 1]), parseFloat(resultFormula[i + 1]));
            resultFormula.splice(i - 1, 3, newResult);
            i -= 2;
        }
        else if (resultFormula[i] === "X"){
            let newResult = multiply(parseFloat(resultFormula[i-1]), parseFloat(resultFormula[i + 1]));
            resultFormula.splice(i - 1, 3, newResult);
            i -= 2;
        }
    }
    for (let k = 0; k < resultFormula.length; k++){
        if (resultFormula[k] === "-") {
            let newResult = subtract(parseFloat(resultFormula[k - 1]), parseFloat(resultFormula[k + 1]));
            resultFormula.splice(k - 1, 3, newResult);
            k -= 2;
        }
        else if (resultFormula[k] === "+") {
            let newResult = add(parseFloat(resultFormula[k - 1]), parseFloat(resultFormula[k + 1]));
            resultFormula.splice(k - 1, 3, newResult);
            k -=2;
        }
    }
    console.log(resultFormula);
    screen.textContent = resultFormula;
});

clear.addEventListener("click", () => {
    resultFormula = [];
    screen.textContent = "";
});

deleteElement.addEventListener("click", () => {
    resultFormula.pop();
    screen.textContent = resultFormula.join("");
          
});


  
    



    



    
    

  

    

    



  
 
    