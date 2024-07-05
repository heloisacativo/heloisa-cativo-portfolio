import React from "react";
import "./Project.css";
import ImgProject2 from "../assets/projects/Project-2/project2-lineny.png";
import ImgPersona from "../assets/projects/Project-2/persona1-lineny.png";
import ImgWireframe from "../assets/projects/Project-2/prototype-mob-lineny.png";
import ImgWireframe2 from "../assets/projects/Project-2/prototype-resp-lineny.png";
import ImgPrototype1 from "../assets/projects/Project-2/prototype-mob-lineny.png";
import ImgPrototype2 from "../assets/projects/Project-2/prototype-resp-lineny.png";
import ImgDesignResponsive from "../assets/projects/Project-2/design-responsive.png";
import ImgMockup  from "../assets/projects/Project-2/mockups-mob-lineny.png";
import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const Project2 = () => {
    return (
            <>
                <NavigationBar/>
                <div className="descriptionProject">
                    <h1>LineNY</h1>
                    <p>Estudo de caso</p>
                    <div className="imgProject">
                    <img src={ImgProject2} alt="Imagem do Projeto LineNy"/>
                    </div>
               </div>
                <div className="theProduct">
                    <h2>O Produto</h2>
                    <p>O LineNY é um aplicativo/site onde usuários podem acessa-lo para verificar estações de próxima, assim como criar uma conta, criar rotas, itinerários e adicionar aos favoritos.
</p>
                    <h2>Meta</h2>
                    <p>Challenge gerado no sharpen onde a meta era criar um aplicativo para os usuários encontrarem trem/estação para o sistema de Metrô de Nova York.</p>
                </div>
                <div className="research">
                    <h2>Pesquisa</h2>
                    <p>Realizei pesquisa online, utilizei de auditoria compotetiva, personas e declaração de problema onde pude obter insights valiosos pro LineNY.</p>
                </div>
                <div className="personas">
                    <h2>Personas</h2>
                    <div className="imgPersonas">
                    <img src={ImgPersona} alt="Imagem Persona"/>
                    </div>
                </div>
                <div className="problemStatement">
                <h2>Declaração de Problema</h2>
                <p>Laura usa metrô diariamente e enfrenta frustações com atrasos frequentes, ela precisa de uma maneira eficiente de receber informações em tempo real sobre atrasos e mudanças no serviço por que isso ajudará a chegar pontualmente ao trabalho, cumprir seus prazos importantes e passar mais tempo de qualidade com a família</p>
                </div>
               <div className="designStart">
                <h2>Começando o Design</h2>
               <div className="wireframe">
               <p>Wireframe</p>
               <div className="imgWireframe">
               <img src={ImgWireframe} alt="Wireframe do LineNY"/>
               <img src={ImgWireframe2} alt="Wireframe responsivo do LineNY"/>
               </div>
               </div>
              <div className="prototype">
              <div className="imgPrototype1">
              </div>
              </div> 
             <div className="mockups">
                <h2>Mockups</h2>
                <div className="imgMockups">
                <img src={ImgMockup} alt="Imagem do Mockup da LineNY"/>
                </div>
             </div>
             <div className="designResponsive">
              <div className="imgResponsive">
              <img src={ImgDesignResponsive} alt="Imagem Responsiva da LineNy"/>
              </div>
             </div>   
            </div>
            <Footer/>
            </>
            );
};

export default Project2;