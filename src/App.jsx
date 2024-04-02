import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Register from './Components/Register'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 

  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
