import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import Contacts from './UI/pages/Contacts/Contacts';
import Courses from './UI/pages/Courses/Courses';
import Team from './UI/pages/Team/Team';
import Home from './UI/pages/Home/Home';
import Projects from './UI/pages/Projects/Projects';
import Wrapper from './UI/uiComponents/Wrapper/Wrapper';
import Martop from './UI/uiComponents/Martop/Martop';
import Footer from './UI/uiComponents/Footer/Footer';

const App = () => {
    return (
      <Wrapper>
        <header>
           <Link to='/Home'> Home </Link>
           <Link to='./team'> TEAM </Link>
           <Link to='./courses'> COURSES </Link>
           <Link to='./projects'> PROJECTS </Link>
           <Link to='./contacts'> CONTACTS </Link>
        </header>

  
        <Martop>
          <Routes>
           <Route path='/home' element={ <Home/> } />
           <Route path='/team' element={<Team />} />
           <Route path='/courses' element={<Courses />} />
           <Route path='/projects' element={<Projects />} />
           <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </Martop>

        <Footer />
      </Wrapper>
  )
}

export default App