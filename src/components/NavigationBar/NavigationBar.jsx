import React from "react";
import { Link } from "react-router-dom";
import "./MediaQueries.css";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";


const NavigationBar = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const currentLocation = useLocation();

    useEffect(() => {
        const currentPath = currentLocation.pathname;
        if (currentPath === "/") {
            setSelectedOption(1);
        } else if (currentPath === "/uxProjects") {
            setSelectedOption(2);
        } else if (currentPath === "/frontendProjects") {
            setSelectedOption(3);
        }
    }, [currentLocation.pathname]);

    

    return (
        
        <div className="navigationContainer">
        <ul>
                 <li>
                    <Link to="/" className={`noUnderline ${selectedOption === 1 ? 'selected' : ''}`}>
                        <span >Todos</span>
                    </Link>
                </li> 
                <li>
                    <Link to="/uxProjects" className={`noUnderline ${selectedOption === 2 ? 'selected' : ''}`}>
                    <span >User Experience</span>
                    </Link>
                </li>   
                <li >
                    <Link to="/frontendProjects" className={`noUnderline ${selectedOption === 3 ? 'selected' : ''}`}>
                        <span>Front-End</span>
                    </Link>
                
                </li>             
            </ul>
        </div>
    )
}


export default NavigationBar;