function questions() {
    var a1 = document.querySelector("input[name='q1']:checked").value;
    if(a1 === "Blue Whale")
        document.getElementById(results).innerHTML = "You got it correct!";
    else
        document.getElementById(results).innerHTML = "You got it wrong :(";
}