import { useState } from "react";

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
                    <button className="btn btn-primary me-2">Features</button>
                    <button className="btn btn-primary me-2">Features</button>
                    <button className="btn btn-primary me-2">Features</button>
                </div>
            </div>
            <div className="w-100 d-flex workout_contents">
                <div className="w-25 border d-flex flex-column content_divs">
                    {leftFeatures}
                </div>
                <div className="w-50 border content_divs p-4">
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
                </div>
                <div className="w-25 border content_divs">Right</div>
            </div>
        </div>
    )
}

export default WorkoutApp;