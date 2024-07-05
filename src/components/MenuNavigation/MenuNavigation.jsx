import "./MediaQueries.css";
import React, {useState} from "react";
import menuNav from "../../assets/imgs/menu-nav.png";
import backIcon from "../../assets/imgs/back-arrow.png";
import PortfolioIcon from "../../assets/imgs/portfolio-icon.png";
import AboutMeIcon from "../../assets/imgs/about-me-icon.png";
import { Link } from "react-router-dom";

const MenuNavigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleNavMenu = () => {
        setShowMenu(!showMenu);
    };



    return (
        <div className="menuSidebarContainer">
            <img src={menuNav} alt="Menu Icon" onClick={toggleNavMenu} />
            {showMenu && (
                <div className="sidebarMenu">
                <img src={backIcon} alt="Icon Back" onClick={toggleNavMenu}/>
                <div className="listMenu">
                    <div className="item">
                    <img src={PortfolioIcon} alt="Portfolio Icon"/>
                    <span><Link to="/">Portfólio</Link></span>
                    </div>
                    <div className="item">
                    <img src={AboutMeIcon} alt="About me Icon"/>
                    <span><Link to="/aboutMe" >Sobre mim</Link></span> 
                    </div>
                </div>
                 

                </div>
            )}
        </div>
    );
};

export default MenuNavigation;