
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Display from './component/Layout/Display'
import SignIn from './component/Layout/SignIn'
import SignInForm from './component/Layout/SignInForm'
import Dashboard from './component/Layout/Main/Dashboard'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='display' element={<Display/>}/>
      <Route path='hero' element={<SignIn/>}/>
      <Route path='signIn' element={<SignInForm/>}/>
      <Route path='home' element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App
