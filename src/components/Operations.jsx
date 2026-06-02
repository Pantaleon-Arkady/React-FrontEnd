import { Link } from "react-router-dom";
import { useState } from "react";

function Operation() {
    const [firstNumber, setFirstNumber] = useState();
    const [secondNumber, setSecondNumber] = useState();
    const [basicOperation, setBasicOperation] = useState();
    const [answer, setAnswer] = useState();

    const range = (start, end, step = 1) => {
        Array.from()
    }

    const numbers = [];

    for (let num = 0; num < 10; num++) {
        numbers.push(num);
    }

    const dragNumber = (ev, number) => {
        ev.dataTransfer.setData("draggedNumber", number)

        console.log("dragging number: " + number) 
    }

    const elementDragOver = (ev) => {
        ev.preventDefault();
    }

    const firstNumberDrop = (ev) => {
        ev.preventDefault();

        const firstNumberData = ev.dataTransfer.getData("draggedNumber");

        console.log("first Number: " + firstNumberData);

        setFirstNumber(firstNumberData);
    }

    const secondNumberDrop = (ev) => {
        ev.preventDefault();

        const numberValue = ev.dataTransfer.getData("draggedNumber");

        console.log("second Number: " + numberValue);

        setSecondNumber(numberValue);
    }

    const dragOperation = (ev, operation) => {
        ev.dataTransfer.setData("draggedOperation", operation)

        console.log("dragging operation: " + operation)
    }

    const operationDrop = (ev) => {
        ev.preventDefault();

        const draggedOperation = ev.dataTransfer.getData("draggedOperation");

        console.log("chosen operation: " + draggedOperation);

        setBasicOperation(draggedOperation);
    }

    const solveEquation = () => {
        console.log(firstNumber, typeof firstNumber);
        console.log(secondNumber, typeof secondNumber);
        console.log(basicOperation, typeof basicOperation);
    
        if (firstNumber && basicOperation && secondNumber) {
    
            const first = Number(firstNumber);
            const second = Number(secondNumber);
    
            let result;

            // if (basicOperation === "+") {
            //     result = first + second;
            // } else if (basicOperation === "-") {
            //     result = first - second;
            // } else if (basicOperation === "*") {
            //     result = first * second;
            // } else if (basicOperation === "/") {
            //     result = first / second;
            // } else {
            //     result = "Invalid Operation";
            // }
    
            switch (basicOperation) {
                case "+":
                    result = first + second;
                    break;
    
                case "-":
                    result = first - second;
                    break;
    
                case "*":
                    result = first * second;
                    break;
    
                case "/":
                    result = first / second;
                    break;
    
                default:
                    result = "Invalid Operation";
            }
    
            console.log("Result:", result);

            setAnswer(result);
    
        } else {
            console.log("drag properly first before solving");
        }
    }

    return (
        <div>
            <div className="w-100 d-flex flex-row justify-content-between">
                <div>
                    <Link to={"/"} className="btn btn-secondary">
                        Back
                    </Link>
                </div>
                <div>Operations</div>
                <div>

                </div>
            </div>
            <div className="w-100 border d-flex flex-column p-5">
                <div className="w-100 border d-flex flex-row">
                    <div className="w-75 border d-flex flex-row justify-content-around">
                    {numbers.map((number) => (
                        <div 
                            key={number}
                            className="border py-1 px-3 rounded"
                            draggable
                            onDragStart={(ev) => dragNumber(ev, number)}
                        >
                            {number}
                        </div>
                    ))}
                    </div>
                    <div className="w-25 border d-flex flex-row">
                        <div 
                            className="border px-3 py-2"
                            draggable
                            onDragStart={(ev) => dragOperation(ev, "+")}
                        >
                            +
                        </div>
                        <div 
                            className="border px-3 py-2"
                            draggable
                            onDragStart={(ev) => dragOperation(ev, "-")}
                        >
                            -
                        </div>
                        <div 
                            className="border px-3 py-2"
                            draggable
                            onDragStart={(ev) => dragOperation(ev, "*")}
                        >
                            *
                        </div>
                        <div 
                            className="border px-3 py-2"
                            draggable
                            onDragStart={(ev) => dragOperation(ev, "/")}
                        >
                            /
                        </div>
                    </div>
                </div>
                <div className="w-100 border d-flex flex-row p-2 mt-5">
                    <div
                        className="w-25 border"
                        onDragOver={elementDragOver}
                        onDrop={(ev) => firstNumberDrop(ev)}
                    >
                        {firstNumber ? firstNumber : "Drag a Number"}
                    </div>
                    <div
                        className="w-25 border"
                        onDragOver={elementDragOver}
                        onDrop={(ev) => operationDrop(ev)}
                    >
                        {basicOperation ? basicOperation : "drag an operation"}
                    </div>
                    <div
                        className="w-25 border"
                        onDragOver={elementDragOver}
                        onDrop={(ev) => secondNumberDrop(ev)}
                    >
                        {secondNumber ? secondNumber : "drag a second number"}
                    </div>
                    <div className="w-25 border">
                        <button 
                            onClick={() => solveEquation()}
                            className="btn btn-success"
                        >
                            Solve
                        </button>
                        <div>
                            {answer ? answer : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Operation;
