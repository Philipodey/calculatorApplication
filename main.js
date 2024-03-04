const keys = document.querySelectorAll(".key");
const displayInput = document.querySelector(".display .input");
const displayOutput = document.querySelector(".display .output");
 let input = ""

for (const key of keys) {
    const respond = key.dataset.key;

 key.addEventListener("click", ()=>{
    if(respond == "clear"){
        input = "";
        displayInput.innerHTML = "";
        displayOutput.innerHTML = "";
    }else if(respond == "backspace"){
        input = input.slice(0, -1);
        displayInput.innerHTML = cleanCode(input);
    }else if(respond == "="){
        let result = eval(confirmInput(input));

        displayOutput.innerHTML = modifyOutput(result);
    }else if(respond == "brackets"){
        if(
            input.indexOf("(") == -1 ||
            input.indexOf("(") != -1 &&
            input.indexOf(")") != -1 &&
            input.lastIndexOf("(") <
             input.lastIndexOf(")")
          ){
            input += "(";
          }else if(
            input.indexOf("(") != -1 &&
            input.indexOf(")") == -1 ||
            input.indexOf("(") != -1 &&
            input.indexOf(")") != -1 &&
            input.lastIndexOf("(") > input.lastIndexOf(")")){
                input += ")";
          }
          displayInput.innerHTML = cleanCode(input);
        }else{
            // if(validateInput(respond)){
                input += respond;
                displayInput.innerHTML = cleanCode(input);
            
        }
    })
}

 function cleanCode(input) {
    let split = input.split("");
    // let splitLenght = split.length;
    for (let index = 0; index < split.length; index++) {
        if(split[index] == "*"){
            split[index] = `<span class="operator"> X </span>`;
        }else if(split[index] == "+"){
            split[index] = `<span class = "operator"> + </span>`;
        }else if(split[index] == "/"){
            split[index] = `<span class = "operator"> ÷ </span>`;
        }else if(split[index] == "-"){
            split[index] = `<span class = "-"> - </span>`;
        }else if(split[index] == "%"){
            split[index] = `<span class = "%"> % </span>`
        }
        else if(split[index] == "brackets"){
            split[index] = `<span class = "brackets"> ( </span>`;
        }else if(split[index] == "brackets"){
            split[index] = `<span class = "brackets"> ) </span>`;
        }else if(split[index] == "="){
            split[index] = `<span operator>=</span>`
        }
        else if(split[index] === "()") {
            if (/\w*\d{1,}w*/g.test(assigned)) {
                split[index] = ")";
            }else{
                split[index] = "(";
            }
       }
    }
  
  return split.join("");
}

function modifyOutput (output){
    let outputString = output.toString();
    let decimal = outputString.split(".")[1];
    outputString = outputString.split(".")[0];

    let outputContainer = outputString.split("");
    if(outputContainer.length > 3){
        for (let index = outputContainer.length - 3; index >0; index -= 3) {
           outputContainer.splice(index,0, ",")
            
        }
    }
    if(decimal){
        outputContainer.push(".");
        outputContainer.push(decimal);
    }
    return outputContainer.join("")

}

function validateInput(respond){
    let lastInput = input.slice(-1);
    let operators = ["+","-","*","/"]

    if(value == "." && lastInput == "."){
        return false;
    }
    if(operators.includes(respond)){
        if(operators.includes(lastInput)){
            return false;
        } else{
            return true;
        }
    }
    return true;
}

function confirmInput(input){
    let inputContainer = input.split("");

    for (let index = 0; index < inputContainer.length; index++) {
        if (inputContainer[index] == "%") {
            inputContainer[index] = "/100"
        }
        
    }
    return inputContainer.join("")
}
