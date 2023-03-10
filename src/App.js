import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
import { AuthComponent } from '@/components/AuthComponent'

import Login from '@/pages/Login'
import MainLayout from '@/pages/Layout'
import Home from '@/pages/Home'
import DM from '@/pages/DM'
import Medical from '@/pages/Medical'
import PV from '@/pages/PV'
import Stat from '@/pages/Stat'
import SystemConfig from '@/pages/SystemConfig'
import User from '@/pages/User'

import './App.css'
import { history } from '@/utils'

function App () {
  return (

    <HistoryRouter history={history}>
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
            <Route path='user_project' element={< User />}></Route>
          </Route>
        </Routes>
      </div>

    </HistoryRouter>
  )
}

export default App
