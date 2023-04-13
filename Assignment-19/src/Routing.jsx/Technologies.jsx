import React from 'react';
import { Link, Outlet } from 'react-router-dom';
function Technologies(props) {
    return (
        <div className='mainContent'>
           <div className="leftContent">
                <Link to='html'>HTML</Link>
                <Link to='css'>CSS</Link>
                <Link to='/javascript'>JavaScript</Link>
                <Link to='/react'>React</Link>
           </div> 
           <div className="rightContent">
                <Outlet/>
           </div>
        </div>
    );
}

export default Technologies;