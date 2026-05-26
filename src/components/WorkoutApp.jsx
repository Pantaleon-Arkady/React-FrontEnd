function WorkoutApp() {

    const leftFeatures = [];

    for (let ctr = 0; ctr < 9; ctr++) {
        leftFeatures.push(
            <div key={ctr} className="border p-4 mx-3 mt-4">
                Left Feature {ctr + 1}
            </div>
        )
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
                <div className="w-50 border content_divs">Main</div>
                <div className="w-25 border content_divs">Right</div>
            </div>
        </div>
    )
}

export default WorkoutApp;