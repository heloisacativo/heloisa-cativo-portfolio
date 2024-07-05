import React from "react";
import "./Project.css";
import ImgProject4 from "../assets/imgs/project-4.png";
import ImgHomeScreen from "../assets/projects/Project-4/main-screen.png";
import ImgHomeBody from "../assets/projects/Project-4/main-body.png";
import ImgGallery from "../assets/projects/Project-4/galery-screen.png";
import ImgPrice from "../assets/projects/Project-4/price-screen.png";
import ImgWChoosesUs from "../assets/projects/Project-4/wchoosesu-screen.png";
import ImgThanks from "../assets/projects/Project-4/thanks-screen.png";
import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const Project4 = () => {

  
    return (
    <> 
        <NavigationBar/>
        <div className="descriptionProject">
            <h1>ForksTravel</h1>
            <p>Site pra uma apresentação no meu curso de Inglês</p>
            <div className="imgProject4">
            <img src={ImgProject4} alt="Imagem do Projeto 4"/>
            </div>
       </div>
       <div className="mainProject4">
       <img src={ImgHomeScreen} alt="Imagem da Página Inicial"/>
       </div>
       <div className="screenBody4">
       <div className="screenHomeBody4">
       <img src={ImgHomeBody} alt="Imagem do Corpo da Página Inicial"/>        
       </div>
       <div className="screenProject4">  
            <div className="screenGallery">
            <img src={ImgGallery} alt="Imagem da Galeria do Site"/>
            </div>
            <div className="priceScreen">
            <img src={ImgPrice} alt="Imagem do preço"/>
            </div>
            <div className="wchooseuScreen">
            <img src={ImgWChoosesUs} alt="Imagem do Por que nos escolher"/>
            </div>
            <div className="thanksScreen">
            <img src={ImgThanks} alt="Imagem do agradecimento"/>
           </div>
        </div>
      </div>
      <Footer/>
    </>
    )
}

export default Project4;