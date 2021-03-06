import React from 'react';
import './nav.css';
import {Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Weather App</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="/">صفحه ی اصلی<span class="sr-only">(current)</span></a>
                            <Link class="nav-item nav-link" to="/about">درباره اپ</Link>
                            <a class="nav-item nav-link" href="#">درباره ما</a>
                            {/* <a class="nav-item nav-link disabled" href="#">Disabled</a> */}
                            </div>
                        </div>
            </nav>
           </div>
    )
}

export default Navbar
