

import { Route , Routes } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './AllPage/Home';
import About from './AllPage/About';
import Contact from './AllPage/Contact';
import Mobile from './AllPage/Mobile';
import Tshart from './AllPage/Tshart';
import Electronics from './AllPage/Electronics';
import Homes from './AllPage/Homes';
import Appliances from './AllPage/Appliances';
import Travel from './AllPage/Travel';
import Toys from './AllPage/Toys';
import Topoffers from './AllPage/Topoffers';
import './App.css';

function App() {
  return (
   <>
   <Header />
   <Routes>
     <Route path='/Home' element={<Home />} />
     <Route path='/About' element={<About />} />
     <Route path='/Contact' element={<Contact />} />
     <Route path='/Mobile' element={<Mobile />} />
     <Route path='/Tshart' element={<Tshart />} />
     <Route path='/Electronics' element={<Electronics />} />
     <Route path='/Homes' element={<Homes />} />
     <Route path='/Appliances' element={<Appliances />} />
     <Route path='/Travel' element={<Travel />} />
     <Route path='/Toys' element={<Toys />} />
     <Route path='/Topoffers' element={<Topoffers />} />
   </Routes>

   <Footer />
   </>
  );
}

export default App;
