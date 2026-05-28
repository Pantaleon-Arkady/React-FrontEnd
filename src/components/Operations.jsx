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
            
        </div>
    )
}

export default Operation;