// import { Autocomplete, TextField } from '@mui/material';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Featured from './Components/Featured/Featured';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">

<BrowserRouter>
    
    <Header></Header>
    
    <Switch>
    
  <Route exact path='/home'>
    <Featured></Featured>
  </Route>
  <Route exact path='/'>
    <Featured></Featured>
  </Route>
<Route path='/about'>
  <About></About>
</Route>
 
  <Route exact path ='/services'>
    <Services></Services>
  </Route>

  <Route path='*'>
    <NotFound></NotFound>
  </Route>
  
  </Switch>
  <Footer></Footer>
  
  </BrowserRouter>



    </div>
  );
}

export default App;

