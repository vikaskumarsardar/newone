import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Nav from './compo/Nav'
import Services from './compo/services'
import Home from './compo/home'
import About from './compo/about'
import Contact from './compo/contact'

function App() {
  return (
    <div className='App'>

    <Router>
    <Nav/>
    <div className='Compo'>
    <Route path='/home'>
      <Home/>
    </Route>
    <Route path='/about'>
      <About/>
    </Route>
    <Route path='/contact'>
      <Contact/>
    </Route>
    <Route path='/services'>
      <Services/>
    </Route>
  </div>
    </Router>

    </div>
    
    
    
    
  );
}

export default App;
