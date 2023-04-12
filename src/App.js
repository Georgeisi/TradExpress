import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import IndiBus from './Pages/IndiBus';
import BuySell from './Pages/BuySell';
import Login from './Pages/Login';
import AlmostThere from './Pages/AlmostThere';
import Error404 from './Pages/Error404';
import NavBarr from './Componets/NavBarr';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBarr/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/indi-bus' element={<IndiBus/>}/>
        <Route path='/buy-sell' element={<BuySell/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/almostthere' element={<AlmostThere/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
