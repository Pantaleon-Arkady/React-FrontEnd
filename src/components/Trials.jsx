import { useState } from "react";

function Trials() {
    const [fruit, setFruit] = useState("");

    const [fruits, setFruits] = useState([
        "apple",
        "banana",
        "cherry"
    ]);

    const addFruit = (fruitToAdd) => {
        if (!fruitToAdd.trim()) return;

        setFruits(prev => [...prev, fruitToAdd]);
        setFruit("");
    };

    return (
        <div>
            <input
                className="form-control"
                type="text"
                value={fruit}
                onChange={(e) => setFruit(e.target.value)}
            />

            <button
                className="btn btn-success"
                onClick={() => addFruit(fruit)}
            >
                Add Fruit
            </button>

            {fruits.map((fruit, index) => (
                <div key={index}>
                    {fruit}
                </div>
            ))}
        </div>
    );
}

export default Trials;