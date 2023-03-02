
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Display from './component/Layout/Display'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='display' element={<Display/>}/>
    </Routes>
    </>
  )
}

export default App
