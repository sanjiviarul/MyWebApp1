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
        <div className="header">
        <h1 class="h2color"> This line is from /ui/src/components/Header.js</h1>
        </div>
        <form class="ps-lg-5">
              <button class="btn btn-sm btn-success rounded-pill order-0" type="submit">from /ui/src/components/Header.js</button>
        </form>
  
    </div>

    )
}

export default Header