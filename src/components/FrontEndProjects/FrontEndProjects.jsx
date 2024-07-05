import React from "react";
import ImgProject4 from "../../assets/imgs/project-4.png";
import "../../components/Main/MediaQueries.css";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

const FrontEndProjects = () => {

    const navigate = useNavigate();

    const goToProject = (path) => {
        navigate(path);
    }

    return (
        <>
            <NavigationBar />
            <div className="projectsList">
            <div onClick={() => goToProject('/projects/forksTravel')} className="cards">
                    <img src={ImgProject4} alt="Projeto 4" />
                    <div className="overlayCard">
                        <div className="descriptionCard">
                            <h2>Forks Travel</h2>
                            <p>Front-End (Html, JavaScript)</p>
                        </div>
                    </div>
                </div>
                </div>
            <Footer />
        </>
    )
}

export default FrontEndProjects;