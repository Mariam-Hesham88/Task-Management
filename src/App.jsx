import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return <>
  <Navbar/>
  <Home/>
  <Footer/>
  </>
}

export default App
