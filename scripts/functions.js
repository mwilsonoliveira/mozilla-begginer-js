//named function

function namedFunction() {
    var text = document.getElementById("pNome").value;
    var greeting = `Hi ${text}! This is a Named Function Function!`;
    document.getElementById("pFunction").innerHTML = greeting;
}

console.log(namedFunction('Marcos'));

//anonymous function 
//(we don't have the value from the function till we actwally get the end of the script)

var anonymousFunction = function(a) {
    var greeting = `Hi ${a}! This is an Anonymous Function!`;
    return greeting;
}

console.log(anonymousFunction('Marcos'));

//imidiately invoked functional expression
//(this function runs imediately once we load the script)

(function imediatelyFunction(a) {
    var greeting = `Hi ${a}! This is an imediately invoked functional expression`;
    console.log(greeting);
}());


//-----------------------------

function gravaNome() {
    var input = document.getElementById("inpNome");
    document.getElementById("pNome").innerHTML = input.value;
    input.value = '';
}

