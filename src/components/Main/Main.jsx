import "./MediaQueries.css";
import ImgProjeto1 from "../../assets/imgs/project-1.png";
import ImgProjeto2 from "../../assets/imgs/project-2.jpg";
import ImgProjeto3 from "../../assets/imgs/project-3.jpg";
import ImgProject4 from "../../assets/imgs/project-4.png";
import Footer from "../Footer/Footer"
import { useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useEffect } from "react";

const Main = () => {
    const navigate = useNavigate();

    const goToProject = (path) => {
        navigate(path);
    }

    return(
    <>
        <NavigationBar/>
                <div className="projectsList">
                    <div onClick={() => goToProject('/projects/vetWise')} className="cards">
                        <img src={ImgProjeto1} alt="Projeto 1"/>
                        <div className="overlayCard">
                        <div className="descriptionCard">
                        <h2>VetWise</h2>
                        <p>Estudo de caso, Challenge Curso Google</p>
                        </div>             
                        </div>
                    </div>
                        
                    <div onClick={() => goToProject('/projects/lineNy')} className="cards">
                        <img src={ImgProjeto2} alt="Projeto 2"/>
                        <div className="overlayCard">
                        <div className="descriptionCard">
                        <h2>LineNY</h2>
                        <p>Ux, Sharpen Challenge</p>
                        </div>
                        </div>
                    </div>
                    <div onClick={() => goToProject('/projects/kiddo')} className="cards">
                        <img src={ImgProjeto3} alt="Projeto 3"/>
                        <div className="overlayCard">
                        <div className="descriptionCard">
                        <h2>KIDDO</h2>
                        <p>Ux, Challenge Curso Google</p>
                        </div>
                        </div>
                        </div>

                    <div onClick={() => goToProject('/projects/forksTravel')} className="cards">
                        <img src={ImgProject4} alt="Projeto 4"/>
                        <div className="overlayCard">
                        <div className="descriptionCard">
                        <h2>Forks Travel</h2>
                        <p>Front-End (Html, JavaScript)</p>
                        </div>
                        </div>
                    </div>
                </div>
    <Footer/>
    </>   
       
    )
}


export default Main;