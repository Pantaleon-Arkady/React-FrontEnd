function FirstLayout() {
    return (
        <div className="vh-100 d-flex flex-column bg-light">
            <header
                className="bg-white border m-2 flex-shrink-0"
                style={{ height: "70px" }}
            >
                Header
            </header>
            <main className="flex-grow-1 d-flex gap-2 px-2 pb-2 overflow-hidden">
                {/* Left 25% */}
                <aside
                    className="bg-white border overflow-auto"
                    style={{ flex: "0 0 25%" }}
                >
                    Left Content
                    <div className="m-2 border p-3">
                        Feature
                    </div>
                    <div className="m-2 border p-3">
                        Feature
                    </div>
                    <div className="m-2 border p-3">
                        Feature
                    </div>
                    <div className="m-2 border p-3">
                        Feature
                    </div>
                    <div className="m-2 border p-3">
                        Feature
                    </div>
                    <div className="m-2 border p-3">
                        Feature
                    </div>
                    <div className="m-2 border p-3">
                        Feature
                    </div>
                    <div className="m-2 border p-3">
                        Feature
                    </div>
                    <div className="m-2 border p-3">
                        Feature
                    </div>
                    <div className="m-2 border p-3">
                        Feature
                    </div>
                    <div className="m-2 border p-3">
                        Feature
                    </div>
                    <div className="m-2 border p-3">
                        Feature
                    </div>
                    <div className="m-2 border p-3">
                        Feature
                    </div>
                    <div className="m-2 border p-3">
                        Feature
                    </div>
                    <div className="m-2 border p-3">
                        Feature
                    </div>
                    <div className="m-2 border p-3">
                        Feature
                    </div>
                </aside>
                <section
                    className="bg-white border overflow-auto"
                    style={{ flex: "0 0 50%" }}
                >
                    Main Content
                    <div className="mx-3 my-4 p-3 border h-25">
                        Main Feature Div
                    </div>
                    <div className="mx-3 my-4 p-3 border h-25">
                        Main Feature Div
                    </div>
                    <div className="mx-3 my-4 p-3 border h-25">
                        Main Feature Div
                    </div>
                    <div className="mx-3 my-4 p-3 border h-25">
                        Main Feature Div
                    </div>
                    <div className="mx-3 my-4 p-3 border h-25">
                        Main Feature Div
                    </div>
                    <div className="mx-3 my-4 p-3 border h-25">
                        Main Feature Div
                    </div>
                    <div className="mx-3 my-4 p-3 border h-25">
                        Main Feature Div
                    </div>
                    <div className="mx-3 my-4 p-3 border h-25">
                        Main Feature Div
                    </div>
                    <div className="mx-3 my-4 p-3 border h-25">
                        Main Feature Div
                    </div>
                    <div className="mx-3 my-4 p-3 border h-25">
                        Main Feature Div
                    </div>
                    <div className="mx-3 my-4 p-3 border h-25">
                        Main Feature Div
                    </div>
                    <div className="mx-3 my-4 p-3 border h-25">
                        Main Feature Div
                    </div>
                    <div className="mx-3 my-4 p-3 border h-25">
                        Main Feature Div
                    </div>
                    <div className="mx-3 my-4 p-3 border h-25">
                        Main Feature Div
                    </div>
                    <div className="mx-3 my-4 p-3 border h-25">
                        Main Feature Div
                    </div>
                    <div className="mx-3 my-4 p-3 border h-25">
                        Main Feature Div
                    </div>
                </section>
                <aside
                    className="bg-white border overflow-auto"
                    style={{ flex: "0 0 25%" }}
                >
                    <div>
                        Right Feature
                    </div>
                </aside>
            </main>
        </div>
    );
}

export default FirstLayout;