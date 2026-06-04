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
        switch (action.type) {
            case "INCREASE":
                return state.map((team) => {
                    if (team.id === action.id) {
                        return { ...team, score: team.score + 1 }
                    } else {
                        return team;
                    }
                })

            case "DECREASE":
                return state.map((team) => {
                    if (team.score === 0) {
                        return team;
                    } if (team.id === action.id) {
                        return { ...team, score: team.score - 1 }
                    } else {
                        return team;
                    }
                })
        }
    }

    const [score, dispatch] = useReducer(scoreReducer, initialTeamScore);

    const handleScoreInc = (team) => {
        dispatch({ type: "INCREASE", id: team.id })
    };

    const handleScoreDec = (team) => {
        dispatch({ type: "DECREASE", id: team.id })
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

            <div className="w-50 border d-flex flex-row">
                {score.map((team) => {
                    return (
                        <div
                            key={team.id}
                            className="w-50 p-2"
                        >
                            <div className="w-100 border-bottom">
                                {team.name} - {team.score}
                            </div>
                            <label>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleScoreInc(team)}
                                    value={team.name}
                                >
                                    Add Score
                                </button>
                            </label>
                            <label>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleScoreDec(team)}
                                    value={team.name}
                                >
                                    Minus Score
                                </button>
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Trials;