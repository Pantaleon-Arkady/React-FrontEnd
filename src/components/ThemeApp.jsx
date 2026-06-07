import { useState } from "react";

function ThemeApp() {
    const [themeValue, setThemeValue] = useState("Light");

    return (
        <div className="w-100 vh-100 bg-secondary-subtle">
            <div className="border rounded m-2 bg-white p-3">
                Theme App Header
            </div>
            <div className="border rounded m-2 bg-white p-4">
                Theme App Body
                <button type="button" id="themeButton" className="btn btn-secondary dropdown-toggle border m-2" data-bs-toggle="dropdown">
                    Theme: <span>{ themeValue } </span>
                </button>
                <div className="dropdown-menu">
                    <button onClick={() => setThemeValue("Light")} className="dropdown-item">Light</button>
                    <button onClick={() => setThemeValue("Dark")} className="dropdown-item">Dark</button>
                    <button onClick={() => setThemeValue("Blue")} className="dropdown-item">Blue</button>
                </div>
                App
            </div>
        </div>
    )
}

export default ThemeApp;