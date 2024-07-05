import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./MediaQueries.css";

const Header = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const currentLocation = useLocation();

    useEffect(() => {
        const currentPath = currentLocation.pathname;
        if (currentPath === "/") {
            setSelectedOption(1);
        } else if (currentPath === "/aboutme") {
            setSelectedOption(2);
        }
    }, [currentLocation.pathname]);

    return (
        <div className="header">
            <nav className="headerNavigation">   
            <ul>
                 <li>
                    <Link to="/" className={`noUnderline ${selectedOption === 1 ? 'selected' : ''}`}>
                        <span>Portfólio</span>
                    </Link>
                </li> 
                <li>
                    <Link to="/aboutme" className={`noUnderline ${selectedOption === 2 ? 'selected' : ''}`}>
                        <span>Sobre mim</span>
                    </Link>
                </li>                
            </ul>
        </nav>
        </div>
    )
}

export default Header;