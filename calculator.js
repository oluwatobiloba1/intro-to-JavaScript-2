const prompt = require('prompt-sync')();



//stast calculator

console.log("Welcome, do basic arithimetics\n");

isRunning = true;
let operatorChoices = ['*','/','+','-'];
let operationPrompt = "what will you like to do?\n (*)multiplication\n (/)division \n (+)Addition \n (-)Subtraction\n"

while(isRunning){
   const operation = prompt(operationPrompt);
   if(operatorChoices.includes(operation)){
    const operand1 = Number(prompt("input your number\n"));
    if(!isNaN(operand1)){
        const operand2 = Number(prompt("input your number\n"));
        if(!isNaN(operand2)){
            switch (operation) {
                case operatorChoices[0]:
                    console.log(`the multiplication of ${operand1} and ${operand2} = ${operand1 * operand2}`)
                    isRunning = false;                   
                    break;
                case operatorChoices[1]:
                    if(operand2 != 0){
                        console.log(`the division of ${operand1} and ${operand2} = ${operand1 / operand2}`)
                        isRunning = false;                    
                    }
                    else{
                        console.log("oh no No NO NO!!!\n Don't start what you can't finish")
                        const state = prompt("do you wish to leave?: [y/n]\n")
                        if (state === "y"){
                            isRunning = false;
                        }
                    }
                    break;
                case operatorChoices[2]:
                    console.log(`the addition of ${operand1} and ${operand2} = ${operand1 + operand2}`)
                    isRunning = false;                    
                    break;
                case operatorChoices[3]:
                    console.log(`the subtraction of ${operand1} and ${operand2} = ${operand1 - operand2}`)
                    isRunning = false;                    
                    break;
            }
        }
    }
    
   }
   else{
    console.log(`${operation} is not a valid operation`)
    const state = prompt("do you wish to leave?: [y/n]\n")
    if (state === "y"){
        isRunning = false;
    }
   }
    
}
