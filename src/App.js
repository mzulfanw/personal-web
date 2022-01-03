import Home from "./Pages/Home/Home";
import classes from './App.module.css'
import { Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Skills from "./Pages/Skills/Skills";
function App() {
  return (

    <div className={classes.App}>
      <div className={classes.wrapperNavbar}>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio" >Portfolio's</Link></li>
          <li><Link to="/skills" >Skills</Link></li>
        </ul>
      </div>
      <div className={classes.main}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="portfolio" element={<Portfolio />}></Route>
          <Route path="skills" element={<Skills />}></Route>
        </Routes>
      </div>
    </div>

  );
}

export default App;
