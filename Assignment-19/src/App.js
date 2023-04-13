
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import { useContext } from 'react';
import { AuthContext } from './Components/Context';
import {Navigate, Route, Routes} from 'react-router-dom'
import Products from './Routing.jsx/Products';
import Profile from './Routing.jsx/Profile';
import Support from './Routing.jsx/Support';
import ProductDetails from './Routing.jsx/ProductDetails';
import Technologies from './Routing.jsx/Technologies';
import Html from './Routing.jsx/Html';
import Css from './Routing.jsx/Css';
import Login from './Components/Login';
import Cart from './Routing.jsx/Cart';
import Protected from './Routing.jsx/Protected';
function App() {
    const {isloggedin} = useContext(AuthContext);
    return(
      <div className='App'>
      {isloggedin?
      <>
      <Nav/>
      <Routes>
      <Route path='' element={<Protected><Home/></Protected>}/>
      <Route path='/home' element={<Protected><Home/></Protected>}/>
      <Route path='/profile' element={<Protected><Profile/></Protected>}/>
      <Route path='/products' element={<Protected><Products/></Protected>}/>
      <Route path='/support' element={<Protected><Support/></Protected>}/>
      <Route path = '/details/:id' element={<Protected><ProductDetails/></Protected>} />
      <Route path='/technologies' element={<Protected><Technologies/></Protected>}>
          <Route path='' element={<Navigate to='html'/>} />
          <Route path='html' element={<Html/>} />
          <Route path='css' element={<Css/>} />
      </Route>
      <Route path='/cart' element={<Protected><Cart/></Protected>} />
      </Routes>
      </>:
        <div>
          <Login/>
        </div>
      }
      </div>
    );
}

export default App;
