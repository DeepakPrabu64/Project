import './App.css';
import Offers from './components/offers';
import './components/offers.css';
 import Offertwo from './components/2';
 import Offertre from './components/3';
 import Offerfr from './components/4';

import { Route, Routes } from "react-router-dom";
import OfferOne from './components/1';
import Offerfiv from './components/5';
import Offersix from './components/6';
import Home from './home';
import Faq from './components/faq';
import Privacy from './components/privacy';
// import Signin from './signin';
import About from './components/about';
import Menu from './components/menu';

function App() {
  return (
    <div className='App'>
  <Routes> 
    <Route exact path ='/' element={<Home/>}/>
    <Route exact path="/1" element={<OfferOne />} />
    <Route exact path="/2" element={<Offertwo />} />
    <Route exact path="/3" element={<Offertre />} />
    <Route exact path="/4" element={<Offerfr />} />
    <Route exact path="/5" element={<Offerfiv />} />
    <Route exact path="/6" element={<Offersix />} />   
    <Route exact path="/offers" element={<Offers />} />  
    <Route exact path="/faq" element={<Faq />} />  
    <Route exact path="/privacy" element={<Privacy />} />  
    {/* <Route exact path="/signin" element={<Signin />} />   */}
    <Route exact path="/about" element={<About />} />
    <Route exact path="/menu" element={<Menu />} />

  </Routes>	

	</div>
  );
}

export default App;
