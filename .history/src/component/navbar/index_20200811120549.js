import React from 'react';
import './nav.css';
import './nav'

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
                            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link" href="#">Features</a>
                            <a class="nav-item nav-link" href="#">Pricing</a>
                            <a class="nav-item nav-link disabled" href="#">Disabled</a>
                            </div>
                        </div>
            </nav>
            <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<h2>Animated Sidenav Example Full Width</h2>
<p>Click on the element below to open the navigation menu.</p>
<span  onclick="openNav()">&#9776; open</span>
        </div>
    )
}

export default Navbar
