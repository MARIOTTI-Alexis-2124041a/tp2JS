function calculer(){
    const select = document.getElementById("operator");
    const value = document.getElementById("calculatorResult");
    const first = parseInt(document.getElementById("calculatorForm").children[0].value);
    const second = parseInt(document.getElementById("calculatorForm").children[2].value);

    switch (select.value){
        case "noOption" :
            alert("choisit un opperateur");
            break;
        case "-" :
            document.getElementById("calculatorResult").innerHTML = first - second ;
            break;
        case "+":
            document.getElementById("calculatorResult").innerHTML = first + second ;
            break;
        case "x":
            document.getElementById("calculatorResult").innerHTML = first * second ;
            break; 
        case "/":
            document.getElementById("calculatorResult").innerHTML = first / second ;
            break; 
    }
}

function calculerEnF(){
    const celcius = parseInt(document.getElementById("celciusForm").children[0].value);
    const fahrenheit = document.getElementById("celciusForm").children[4];
    fahrenheit.value = 9/5 * celcius + 32 ;
}

function calculerEnC(){
    const celcius = document.getElementById("celciusForm").children[0];
    const fahrenheit = parseInt(document.getElementById("celciusForm").children[4].value);
    celcius.value = (5/9) * (fahrenheit - 32) ;
}