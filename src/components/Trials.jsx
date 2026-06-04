import { useState } from "react";

function Trials() {
    const [fruit, setFruit] = useState("");

    const [fruits, setFruits] = useState([
        "apple",
        "banana",
        "cherry"
    ]);

    const addFruit = (fruitToAdd) => {
        setFruits([...fruits, fruitToAdd]);
        setFruit("");
    };

    const concatFruit = (fruitToAdd) => {
        setFruits(fruits.concat(fruitToAdd));
        setFruit("");
    };

    const initialUndefined = () => {
        if (typeof unVariable === 'undefined') {
            const unVariable = "Initially undefined";
            console.log(unVariable)
        } else {
            console.log("It is already defined");
        };
    };

    return (
        <div>
            <input
                className="form-control w-25 m-3 border border-2"
                placeholder="type a fruit..."
                type="text"
                value={fruit}
                onChange={(e) => setFruit(e.target.value)}
            />

            <button
                className="btn btn-success"
                onClick={() => addFruit(fruit)}
            >
                Add Fruit by spread
            </button>

            <button
                className="btn btn-success"
                onClick={() => concatFruit(fruit)}
            >
                Add fruit by concat
            </button>

            <button 
                onClick={initialUndefined}
                className="btn btn-warning"
            >
                Undefined
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