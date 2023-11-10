
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Redirect,Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';

import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
      <>
     <Navbar/>
    
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/service' component={Service}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/menu' component={Menu}/>
      <Redirect to='/'/>
     
    
     </>
    </div>
  );
}

export default App;
