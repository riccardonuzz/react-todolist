import React from 'react';
import TodoListIcon from "../assets/images/icon.png"

const Header = () => {

    return (
        <div className="container-full">
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand">
                    <img src={TodoListIcon} width="30" height="30" className="d-inline-block align-top" alt="" />
                    &nbsp;La mia lista delle cose da fare
                </div>
            </nav>
        </div>
    );

};

export default Header;