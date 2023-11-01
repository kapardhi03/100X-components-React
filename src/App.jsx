import { useState } from 'react'
import './App.css'
import './index.css'
import Login1 from './pages/LoginPage/login1';
import Login2 from './pages/LoginPage/login2';
import Login3 from './pages/LoginPage/login3';
import Login4 from './pages/LoginPage/login4';
import Login5 from './pages/LoginPage/login5';
export default function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    {/* <Login1/> */}
    {/* <Login2/> */}
    {/* <Login3/> */}
    {/* <Login4/> */}
    <Login5/>
    </>
  )
}

