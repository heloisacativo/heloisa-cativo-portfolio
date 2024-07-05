import "./Project.css";
import ImgProject3 from "../assets/projects/Project-3/project3.png";
import ImgPersona1 from "../assets/projects/Project-3/persona1-kiddo.png";
import ImgPersona2 from "../assets/projects/Project-3/persona2-kiddo.png";
import ImgWireframe1Mob from "../assets/projects/Project-3/wireframe1-mob-kiddo.png";
import ImgWireframe2Mob from "../assets/projects/Project-3/wireframe2-mob-kiddo.png";
import ImgSiteMapResponsive from "../assets/projects/Project-3/site-map-responsive-kiddo.png";
import ImgWireframe1Resp from "../assets/projects/Project-3/wireframe1-resp-kiddo.png";
import ImgWireframe2Resp from "../assets/projects/Project-3/wireframe2-resp-kiddo.png";
import ImgAuditCompetitive from "../assets/projects/Project-3/audit-competitive-kiddo.png";
import ImgMockup3  from "../assets/projects/Project-3/mockup-project3.png";
import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const Project3 = () => {

    return (
    <>
<NavigationBar/>
        <div className="descriptionProject">
            <h1>Kiddo</h1>
            <p>Estudo de caso</p>
            <div className="imgProject">
            <img src={ImgProject3} alt="Imagem do Projeto 1"/>
            </div>
       </div>
        <div className="theProduct">
            <h2>O Produto</h2>
            <p>Aplicativo para matrículas escolares.</p>
            <h2>Meta</h2>
            <p>Criar uma Interface de um Aplicativo que facilita o processo dos pais de realizar uma matrícula de seus filhos em uma escola, além do mais acompanhar por meio de uma experiência agradável centrada nesse usuário.
</p>
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
       <div className="wireframe">
       <h2>Wireframe</h2>
       <div className="imgWireframe">
       <img src={ImgWireframe1Mob} alt="Wireframe da Kiddo"/>
       <img src={ImgWireframe2Mob} alt="Wireframe da Kiddo"/>
       </div>
       </div>
        <div className="research">
            <h2>Auditoria Competitiva</h2>
            <div className="imgAuditCompetitive">
                <img src={ImgAuditCompetitive} alt="Imagem Auditoria Competitiva"/>
            </div>
      </div>   
     <div className="siteMapResponsive">
        <div className="imgSiteMap">
        <img src={ImgSiteMapResponsive} alt="Imagem do Mapa do Site do Kiddo"/>
        </div>
     </div>
     <div className="wireframeResponsive">
        <div className="imgWireframeResponsive">
        <img src={ImgWireframe1Resp} alt="Imagem Responsiva do Kiddo"/>
        <img src={ImgWireframe2Resp} alt="Imagem responsiva do Kiddo"/>
        </div>
     </div>
     <div className="mockups">
        <h2>Mockups</h2>
        <div className="imgMockups">
        <img src={ImgMockup3} alt="Imagem do Mockup 3"/>
        </div>
     </div>
    <Footer/>
    </>
    )
}

export default Project3;