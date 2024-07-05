import React from "react";
import "./Project.css";
import ImgProject1 from "../assets/imgs/project-1.png";
import ImgPersona1 from "../assets/imgs/persona1.png";
import ImgPersona2 from "../assets/imgs/persona2.png";
import ImgUserMap from "../assets/imgs/user-journey-map.png";
import ImgStoryBoard from "../assets/imgs/storyboard1.png";
import ImgUseAppStoryBoard from "../assets/imgs/use-app-storyboard.png";
import ImgWireframe1 from "../assets/imgs/wireframe1.png";
import ImgPrototype1 from "../assets/imgs/prototype-lofi1.png"
import ImgBeforaAfterMockup from "../assets/imgs/before-after-mockup.png";
import ImgUxResearch from "../assets/imgs/uxresearch.png";
import ImgInsightVetWise from "../assets/imgs/insights-vetwise.png";
import ImgMockup1  from "../assets/imgs/mockup1.png";
import GifVetwise from "../assets/projects/Project-1/captureGifVetWise.gif";
import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const Project1 = () => {
    return (
    <> 
        <NavigationBar/>
        <div className="descriptionProject">
            <h1>VetWise</h1>
            <p>Estudo de caso, Challenge Curso Google</p>
            
       </div>
       <div className="imgProject">
            <img src={ImgProject1} alt="Imagem do Projeto 1"/>
       </div>
     
        <div className="theProduct">
            <h2>O Produto</h2>
            <p>Aplicativo para encontrar clínica veterinária e realizar agendamentos.</p>
            <h2>Meta</h2>
            <p>Criar um aplicativo intuitivo e acessível para donos de pets  e veterinários.</p>
            <p>Ter empatia com os usuários para entender suas necessidades e pontos problemáticos.
            <br/>Gerar ideias para possíveis soluções para os problemas dos usuários.</p>
        </div>
        <div className="research">
            <h2>Pesquisa</h2>
            <p>Realizei pesquisa online, utilizei de auditoria compotetiva, personas, mapa da jornada do usuário e declaração de problema onde pude obter insights valiosos pro VetWIse.</p>
        </div>
        <div className="personas">
            <h2>Personas</h2>
            <div className="imgPersonas">
            <img src={ImgPersona1} alt="Imagem Persona 1"/>
            <img src={ImgPersona2} alt="Imagem Persona 2"/>
            </div>
        </div>
        <div className="userJourneyMap">
         <h2>Jornada do usuário</h2>
         <div className="imgUserMap">
         <img src={ImgUserMap} alt="Imagem Mapa do Usuário"/>
         </div>
       </div>
       <div className="designStart">
        <h2>Começando o Design</h2>
        <p>Storyboard</p>
        <div className="imgStoryboard">
        <img src={ImgStoryBoard} alt="Imagem do Storyboard"/>
        <img src={ImgUseAppStoryBoard} alt="Imagem do Storyboard no Uso do App"/>
        </div>
       </div>
       <div className="wireframe">
       <p>Wireframe</p>
       <div className="imgWireframe">
       <img src={ImgWireframe1} alt="Wireframe do VetWise"/>
       </div>
       </div>
      <div className="prototype">
      <div className="imgPrototype1">
      <img src={ImgPrototype1} alt="Prototype"/>
      <img src={GifVetwise} alt="Gif VetWise"/>
      </div>
      </div>
      <div className="uxResearch">
        <p>Objetivo da pesquisa: Descobrir se o meu App realmente é intuitivo para os usuários e se os usuários conseguem chegar ao destino final com facilidade.</p>
        <div className="imgResearch">
        <img src={ImgUxResearch} alt="Imagem da Ux Research"/>
        <img src={ImgInsightVetWise} alt="Imagem dos Insights obtidos"/>
        <img src={ImgPrototype1} alt="Prototype"/>
      </div>
      </div>
      <div className="designRefining">
      <div className="imgRefining">
      <img src={ImgBeforaAfterMockup} alt="Antes e Depois do VetWise"/>
      </div>
     </div>    
     <div className="mockups">
        <h2>Mockups</h2>
        <div className="imgMockups">
        <img src={ImgMockup1} alt="Imagem do Mockup 1"/>
        </div>
     </div>
    <Footer/>
    </>
    )
}

export default Project1;