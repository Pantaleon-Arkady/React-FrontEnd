

function WorkoutApp() {

    return (
        <div className="workout_main_div d-flex flex-column">
            <div className="w-100 p-3 border">Header Part</div>
            <div className="w-100 d-flex workout_contents">
                <div className="w-25 border">Left</div>
                <div className="w-50 border">Main</div>
                <div className="w-25 border">Right</div>
            </div>
        </div>
    )
}

export default WorkoutApp;