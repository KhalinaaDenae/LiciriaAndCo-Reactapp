import Navbar from './components/Navbar.jsx';
import './components/styles/navbar.css';
import './components/styles/contact.css'
import { Shop }from './components/Shop.jsx'
import {Cart} from './components/Cart.jsx'
import {Products} from './components/Products'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar /> 
      <Routes>
        <Route path='/' element={<Shop /> }/>
        <Route path='/Products' element={<Products /> }/>
        <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </Router>
  </div>
  );
}

export default App;
