function clearResult(){
    document.getElementById("calc").value=" "
}
function showInput(num){
    calc.value += num;
}
function calculateResult(){
    calc.value = eval(calc.value)
}