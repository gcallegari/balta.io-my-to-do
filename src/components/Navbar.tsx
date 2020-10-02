import React from 'react';

const Navbar = () => {
    return (
        <div className="uk-container">
            <nav className="uk-navbar">
                <div className="uk-navbar-letf">
                    <a href="#" className="uk-navbar-item uk-logo">my to-dos</a>
                </div>

                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <a href="#">
                                <span uk-icon="icon: plus; ratio> 1.2"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;