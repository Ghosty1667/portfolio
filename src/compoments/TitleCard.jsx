import React from 'react'

function TitleCard() {
    return (
        <header className="header vh-100 text-center position-relative">
            <div
                className="text-container position-relative d-flex flex-column justify-content-center align-items-center h-100"
            >
                <h5 className="text-primary fs-3 fw-bold text-uppercase">Hello, World.</h5>
                <h1 id="typing-text" className="display-1 fw-bold text-white"></h1>

                <p className="roles text-white text-uppercase fs-4">
                    <span>Full Stack Web Developer | </span>
                    <span>Online Educator</span>
                </p>

                <a href="#about" className="btn btn-outline-light btn-lg mt-3">
                    <div className="d-flex">
                        <div className="me-3">
                            <i className="fas fa-chevron-down"></i>
                        </div>
                        <div className="text-start">
                            <span>More About Me</span>
                        </div>
                    </div>
                </a>

                <div className="social d-flex gap-3 position-absolute">
                    <a href="#">
                        <i className="bi bi-twitter text-white display-6"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-instagram text-white display-6"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-linkedin  text-white display-6"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-facebook text-white display-6"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-youtube text-white display-6"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-github text-white display-6"></i>
                    </a>
                </div>
            </div>
        </header >
    )
}

export default TitleCard