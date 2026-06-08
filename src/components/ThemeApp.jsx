import { useState, useReducer } from "react";

function ThemeApp() {

    const themeReducer = (state, action) => {
        switch (action.type) {
            case "LIGHT":
                return {
                    mode: "Light",
                    bg: "secondary-subtle"
                };

            case "DARK":
                return {
                    mode: "Dark",
                    bg: "dark"
                };

            case "BLUE":
                return {
                    mode: "Blue",
                    bg: "primary"
                };

            default:
                return state;
        }
    };

    const [theme, dispatch] = useReducer(themeReducer, {
        mode: "Light",
        bg: "secondary-subtle"
    });

    return (
        <div className={`w-100 vh-100 bg-${theme.bg}`}>
            <div className="border rounded m-2 bg-white p-3">
                Theme App Header
            </div>
            <div className="border rounded m-2 bg-white p-4">
                Theme App Body
                <button type="button" id="themeButton" className="btn btn-secondary dropdown-toggle border m-2" data-bs-toggle="dropdown">
                    Theme: {theme.mode}
                </button>
                <div className="dropdown-menu">
                    <button
                        onClick={() => dispatch({ type: "LIGHT" })}
                        className="dropdown-item"
                    >
                        Light
                    </button>

                    <button
                        onClick={() => dispatch({ type: "DARK" })}
                        className="dropdown-item"
                    >
                        Dark
                    </button>

                    <button
                        onClick={() => dispatch({ type: "BLUE" })}
                        className="dropdown-item"
                    >
                        Blue
                    </button>
                </div>
                App
            </div>
        </div>
    )
}

export default ThemeApp;