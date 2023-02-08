import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/index'
import Layout from './pages/Layout/index'

function App () {
  return (

    <BrowserRouter>

      <div className='app'>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>


  )
}

export default App
