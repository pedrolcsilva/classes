function Calculator() {
    let operand1 = "";
    let operand2 = "";
    let operation = "";

    this.setOperand1 = function (_operand1){
        operand1 += _operand1;
    };
    this.getOperand1 = function (){
        return operand1;
    };

    this.setOperand2 = function (_operand2){
        operand2 += _operand2;
    };
    this.getOperand2 = function (){
        return operand2;
    };

    this.setOperation = function (_operation){
        operation = _operation;
    };
    this.getOperation = function (){
        return operation;
    };


    this.getResult = function () {
        if(operand1 == ""){
            alert("Operador 1 não definido")
        }
        else if(operation == ""){
            alert("Tipo de operação não definida")
        }
        else if(operand2 == ""){
            alert("Operador 2 não definido")
        }
        else if(operation == '+'){
            return parseInt(operand1) + parseInt(operand2);
        }
        else if(operation == '-'){
            return parseInt(operand1) - parseInt(operand2);
        }
        else if(operation == '*'){
            return parseInt(operand1) * parseInt(operand2);
        }
        else if(operation == '/'){
            return parseInt(operand1) / parseInt(operand2);
        }
    }

    this.clearCalculator = function () {
        operand1 = "";
        operand2 = "";
        operation = "";
    }
}