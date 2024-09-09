import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavLink ,BrowserRouter , Router, Routes ,Route,Navigate} from "react-router-dom";
import Login from './components/Login';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login></Login> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />     
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
