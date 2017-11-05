var outputDiv;
// var numbers = ['0','1','2','3','4','5','6','7','8','9'];
// var operators = ['+','-','*','/'];
// var operations = ['add','sub','mul','div'];
/**
 * @function calculate
 * @param  {string} mathExp {the expression to calculate}
 * @return {number} {the result of the calculation or NaN if it couldn't be done}
 */
function calculate(mathExp) {
  try {
    return eval(mathExp);
  } catch(e) {
    return NaN;
  }
}
document.addEventListener('DOMContentLoaded', function() {
  outputDiv = document.getElementById('output');
  document.addEventListener('click', function(event) {
    var elementId = event.target.innerHTML;
    outputDiv.innerHTML += elementId;
    var expression = outputDiv.innerHTML;
    if (expression[expression.length -1] === "=") {
      var equalRemoved = expression.slice(0, -1);
      outputDiv.innerHTML = calculate(equalRemoved);
    }
    if (expression[expression.length-1] === "C") {
      document.getElementById("output").innerHTML = "";
    }
    if (
        expression.slice(-2) === "++" ||
        expression.slice(-2) === "--" ||
        expression.slice(-2) === "**" ||
        expression.slice(-2) === "//" ||
        expression.slice(-2) === "+-" ||
        expression.slice(-2) === "+*" ||
        expression.slice(-2) === "+/" ||
        expression.slice(-2) === "-+" ||
        expression.slice(-2) === "-*" ||
        expression.slice(-2) === "-/" ||
        expression.slice(-2) === "*+" ||
        expression.slice(-2) === "*-" ||
        expression.slice(-2) === "*/" ||
        expression.slice(-2) === "/+" ||
        expression.slice(-2) === "/-" ||
        expression.slice(-2) === "/*"
       ) {
        document.getElementById("output").innerHTML = expression.slice(0, -1) + "";
    }
    if (expression.length > 12) {
      outputDiv.style.fontSize = "20px";
    }
    if (expression.length > 15) {
      outputDiv.style.fontSize = "15px";
    }
  })
})
