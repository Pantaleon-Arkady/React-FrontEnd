import { useState, useReducer } from "react";

function Trials() {
    const [fruit, setFruit] = useState("");

    const initialTeamScore = [
        {
            id: 1,
            score: 0,
            name: "Spurs"
        },
        {
            id: 2,
            score: 0,
            name: "Knicks"
        }
    ]

    const scoreReducer = (state, action) => {
        switch(action.type) {
            case "INCREASE":
                return state.map((team) => {
                    if (team.id === action.id) {
                        return {...team, score: team.score + 1}
                    } else {
                        return team;
                    }
                })
        }
    }

    const [score, dispatch] = useReducer(scoreReducer, initialTeamScore);

    const handleScore = (team) => {
        dispatch({ type: "INCREASE", id: team.id})
    };

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

            {score.map((team) => {
                return (
                    <div key={team.id}>
                        <label>
                            <button
                                className="btn btn-primary"
                                onClick={() => handleScore(team)}
                                value={team.name}
                            >
                                {team.name} - {team.score}
                            </button>
                        </label>
                    </div>
                )
            })}
        </div>
    );
}

export default Trials;