import React from "react";
import ImgProjeto1 from "../../assets/imgs/project-1.png";
import ImgProjeto2 from "../../assets/imgs/project-2.jpg";
import ImgProjeto3 from "../../assets/imgs/project-3.jpg";
import "../../components/Main/MediaQueries.css";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useNavigate } from "react-router-dom";

const UxProjects = () =>{

    const navigate = useNavigate();

    const goToProject = (path) => {
        navigate(path);
    }
    return (
        <>
        <NavigationBar/>
        <div className="projectsList">
                <div onClick={() => goToProject('/projects/vetWise')} className="cards">
                    <div className="cards card1">
                        <img src={ImgProjeto1} alt="Projeto 1"/>
                        <div className="overlayCard">
                        <div className="descriptionCard">
                        <h2>VetWise</h2>
                        <p>Ux</p>
                        </div>             
                        </div>
                    </div>
                </div>
            
                <div>                
                    <div onClick={() => goToProject('/projects/lineNy')} className="cards card2">
                        <img src={ImgProjeto2} alt="Projeto 2"/>
                        <div className="overlayCard">
                        <div className="descriptionCard">
                        <h2>LineNY</h2>
                        <p>Ux, Sharpen Challenge</p>
                        </div>
                        /</div>
                    </div>
                </div>

                <div onClick={() => goToProject('/projects/kiddo')} className="cards">
                    <div className="cards card3">
                        <img src={ImgProjeto3} alt="Projeto 3"/>
                        <div className="overlayCard">
                        <div className="descriptionCard">
                        <h2>KIDDO</h2>
                        <p>Ux</p>
                        </div>
                        </div>
                    </div>
                </div>
                
        </div>
        <Footer/>
        </>
    )
}


export default UxProjects;