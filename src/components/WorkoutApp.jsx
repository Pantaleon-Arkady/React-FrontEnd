import { useState } from "react";
import { Link } from "react-router-dom";

function WorkoutApp() {
    const [dragged, setDragged] = useState(false);
    const [beingDragged, setBeingDragged] = useState(false);

    const leftFeatures = [];

    for (let ctr = 0; ctr < 9; ctr++) {
        leftFeatures.push(
            <div key={ctr} className="border p-4 mx-3 mt-4">
                Left Feature {ctr + 1}
            </div>
        )
    }

    const squares = [];
    const [colors, setColors] = useState(["danger", "success", "warning", "primary"]);

    const squareDragStart = (ev, index) => {
        ev.dataTransfer.setData("draggedDiv", index);
    }

    const squareDragOver = (ev) => {
        ev.preventDefault();
        // console.log("the square is being dragged OVER") its looping!!!
    }

    const dropSquare = (e, dropIndex) => {
        const draggedIndex = e.dataTransfer.getData("draggedDiv");
    
        const updatedSquares = [...colors];
    
        const draggedSquare = updatedSquares[draggedIndex];
    
        updatedSquares.splice(draggedIndex, 1);
    
        updatedSquares.splice(dropIndex, 0, draggedSquare);
    
        setColors(updatedSquares);
    }

    for (let sqr = 0; sqr < colors.length; sqr++) {
        squares.push(
            <div 
                key={sqr} 
                className={`sub_squares bg-${colors[sqr]}`} 
                draggable
                id={`square-${sqr + 1}`}
                onDragStart={(ev) => squareDragStart(ev, sqr)}
                onDragOver={squareDragOver}
                onDrop={(ev) => dropSquare(ev, sqr)}
            >
                Square {sqr +1}
            </div>
        )
    }

    const dragStart = (e, id) => {
        e.dataTransfer.setData("draggedDiv", id)
        console.log("div being dragged")
    }

    const dragOver = (e) => {
        e.preventDefault();
        setBeingDragged(true);
    }

    const dragDrop = (e) => {
        e.preventDefault();

        const draggedElement = e.dataTransfer.getData("draggedDiv");

        const element = document.getElementById(draggedElement);

        e.currentTarget.appendChild(element);
        setDragged(true);
    }

    if (dragged) {
        console.log("div dragged");
    }

    if (beingDragged) {
        console.log("div being dragged over the placing div *separate logic");
    }

    return (
        <div className="workout_main_div d-flex flex-column">
            <div className="w-100 p-3 border d-flex flex-row justify-content-between">
                <div className="w-25 border">
                    Workout App
                </div>
                <div className="w-50 border d-flex flex-row justify-content-end">
                    <Link to="/" className="btn btn-primary me-2">
                        Back
                    </Link>
                    <button className="btn btn-primary me-2">Features</button>
                    <button className="btn btn-primary me-2">Features</button>
                </div>
            </div>
            <div className="w-100 d-flex workout_contents">
                <div className="w-25 border content_divs">
                    {leftFeatures}
                </div>
                <div className="w-50 border content_divs">
                    <div 
                        className="h-25 w-100 border p-3"
                        onDragOver={dragOver}
                        onDrop={dragDrop}
                    >
                    </div>
                    <div 
                        className="border rounded w-100 h-25 mt-4" 
                        draggable
                        id="dragDiv"
                        onDragStart={(e) => dragStart(e, "dragDiv")}
                    >
                        Draggable Div
                    </div>

                    <div className="main_square bg-light">
                        {squares}
                    </div>

                    <div className="w-100 border mt-5 p-5">
                        Operations
                    </div>
                </div>
                <div className="w-25 border content_divs">Right</div>
            </div>
        </div>
    )
}

export default WorkoutApp;