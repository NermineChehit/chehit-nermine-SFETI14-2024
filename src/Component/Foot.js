import React from 'react';

function Foot() {
    const footerStyle = {
        backgroundColor: '#AED6F1',
  position: 'fixed',
  bottom: '0',
  width: '100%',
    };
    return (
        <footer className="bg-primary text-white text-center text-lg-start" style={footerStyle}>
            {/* Grid container */}
            <div className="container p-4">
                {/* Grid row */}
                <div className="row align-items-center">
                    {/* Left column for phone number */}
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <p className="text-uppercase">Contact us: +216 20 787 789</p>
                    </div>

                    {/* Right column for social media icons */}
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Follow us</h5>
                        <ul className="list-unstyled mb-0 d-flex justify-content-center">
                            <li className="me-3">
                                <a className="text-white" href="#!">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li className="me-3">
                                <a className="text-white" href="#!">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a className="text-white" href="#!">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Grid row */}
            </div>
            {/* Grid container */}

            {/* Copyright */}
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Copyright:
                <span className="text-white">Home Care</span>
            </div>
            {/* Copyright */}
        </footer>
    );
}

export default Foot;