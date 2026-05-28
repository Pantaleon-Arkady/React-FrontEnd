import { Link } from "react-router-dom";

function Operation() {

    const range = (start, end, step = 1) => {
        Array.from()
    }

    const numbers = [];

    for (let num = 1; num < 10; num++) {
        numbers.push(num);
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
                        >
                            {number}
                        </div>
                    ))}
                    </div>
                    <div className="w-25 border">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="w-100 border d-flex flex-row p-2 mt-5">
                    <div className="w-25 border">Number</div>
                    <div className="w-25 border">Operation</div>
                    <div className="w-25 border">Number</div>
                    <div className="w-25 border">Result</div>
                </div>
            </div>
        </div>
    )
}

export default Operation;