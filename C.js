let display=document.getElementById('result');
function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value="";

}
function DeleteLast() {
    display.value = display.value.slice(0);

}
function calculate() {
    try {
        display.value = eval(display.value);
    }
        catch {
            display.value = "Error";
        
    }
}