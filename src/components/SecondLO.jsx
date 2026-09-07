function SecondLO() {

    return (
        <>
            <header className="bg-dark text-white p-3">
                <div className="container">
                    <h3>2nd Layout</h3>
                </div>
            </header>
            <main className="container py-5">

                {/* Welcome Section */}
                <section className="mb-5">
                    <h1>Welcome</h1>
                    <p>
                        This is the homepage of the website.
                    </p>

                    <button className="btn btn-primary">
                        Get Started
                    </button>
                </section>

                {/* Content Section */}
                <section>
                    <h2>About</h2>

                    <div className="row">

                        <div className="col-md-6">
                            <p>
                                Left side content.
                            </p>
                        </div>

                        <div className="col-md-6">
                            <p>
                                Right side content.
                            </p>
                        </div>

                    </div>
                </section>

            </main>
            <footer className="bg-light text-center p-3">
                © 2026 2nd Layout
            </footer>

        </>
    )
}

export default SecondLO;