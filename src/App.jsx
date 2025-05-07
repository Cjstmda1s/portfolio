import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home.jsx';
import Projects from './projects.jsx';
import Project1 from './project1.jsx';
import Project2 from './project2.jsx';
import Skills from './skills.jsx';
import Contact from './contact.jsx';

function App() {
    return (
        <>
            <Router basename='/portfolio'>
                <nav className="black-nav">
                    <h1>
                        Edward Chen
                    </h1>
                    <ul>
                        <Link to="/" className="nav-link">About Me</Link>
                    </ul>
                    <ul>
                        <Link to="/projects" className="nav-link">Projects</Link>
                    </ul>       
                    <ul>
                        <Link to="/skills" className="nav-link">Skills</Link>
                    </ul>
                    <ul>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/project1" element={<Project1 />}></Route>
                    <Route path="/project2" element={<Project2 />}></Route>
                    <Route path="/skills" element={<Skills />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App;