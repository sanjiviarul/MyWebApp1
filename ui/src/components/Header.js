/*Header.js*/
import React from 'react';
import '../App.css';

const Header = () => {

    return (
    <div>       
        <div className="header">
        <h1 class="h2color">
            Postgresql-Express-React-Nodejs (PERN) Stack Example!
        </h1>
        </div>
        <h1> Add Something Here</h1>
        
        <form class="ps-lg-5">
              <button class="btn btn-lg btn-primary rounded-pill order-0" type="submit">My Web App</button>
        </form>
    </div>

    )
}

export default Header