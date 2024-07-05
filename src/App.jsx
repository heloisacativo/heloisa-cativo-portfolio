import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import UxProjects from './components/UxProjets/UxProjects';
import FrontEndProjects from './components/FrontEndProjects/FrontEndProjects';
import Project1 from './projects/Project-1';
import Project2 from './projects/Project-2';
import Project3 from './projects/Project-3';
import Project4 from './projects/Project-4';
import Header from './components/Header/Header';
import MenuNavigation from './components/MenuNavigation/MenuNavigation';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <MenuNavigation/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/uxProjects' element={<UxProjects/>}/>
          <Route path='/frontendProjects' element={<FrontEndProjects/>}/>
          <Route path='/aboutMe' element={<AboutMe/>}/>
          <Route path='/projects/vetWise' element={<Project1/>}/>
          <Route path='/projects/lineNy' element={<Project2/>}/>
          <Route path='/projects/kiddo' element={<Project3/>}/>
          <Route path='/projects/forksTravel' element={<Project4/>}/>
        </Routes>
      </div>
    </Router>
  )
}
  


export default App;
