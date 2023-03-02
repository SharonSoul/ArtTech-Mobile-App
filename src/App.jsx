
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Display from './component/Layout/Display'
import SignIn from './component/Layout/SignIn'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='display' element={<Display/>}/>
      <Route path='signIn' element={<SignIn/>}/>
    </Routes>
    </>
  )
}

export default App
