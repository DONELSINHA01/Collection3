
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import {Route, Routes} from 'react-router-dom';import Products from './Routing/Products';
import Profile from './Routing/Profile';
import Support from './Routing/Support';
import Cart from './Routing/Cart';


function App() {
    
    return(
      <div className='App'>

      <Nav/>
      
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/support' element={<Support/>}/>
      <Route path='/cart' element={<Cart/>}/>


      </Routes>

      </div>
    );
    
}

export default App;
