import './App.css'

import ProductDetail from './components/ProductDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import Navbar  from './components/Navbar';



function App() {
  return (
    <div>

    <Navbar/>
    <Router>
      
      <Routes>
        <Route path='/product/:id' element={<ProductDetail/>} ></Route>
        <Route path='/' element={<HomePage/>} ></Route>
      </Routes>
      
    </Router>
    
    </div>
  ) 
}

export default App
