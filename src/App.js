import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// import Login from './pages/Login/index'
import Login from '@/pages/Login'
import MainLayout from '@/pages/Layout'

import { AuthComponent } from '@/components/AuthComponent'

import Home from '@/pages/Home'
import DM from '@/pages/DM'
import Medical from '@/pages/Medical'
import PV from '@/pages/PV'
import Stat from '@/pages/Stat'
import SystemConfig from '@/pages/SystemConfig'
import User from '@/pages/User'

function App () {
  return (

    <BrowserRouter>

      <div className='app'>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={
            <AuthComponent>
              <MainLayout />
            </AuthComponent>
          }>
            <Route index element={< Home />}></Route>
            <Route path='dm' element={< DM />}></Route>
            <Route path='medical' element={< Medical />}></Route>
            <Route path='pv' element={< PV />}></Route>
            <Route path='stat' element={< Stat />}></Route>
            <Route path='systemconfig' element={< SystemConfig />}></Route>
            <Route path='user' element={< User />}></Route>
          </Route>
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
