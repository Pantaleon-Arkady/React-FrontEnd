import { Link } from "react-router-dom";

function Operation() {

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
                    <div className="w-75 border">
                        Numbers
                    </div>
                    <div className="w-25 border">
                        Operations
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