function display(value){
    document.getElementById("result").value += value;
}

function calculate(){
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
}

function clear5(){
    document.getElementById("result").value = " ";
}