import { BrowserRouter, Routes, Route } from "react-router-dom"
import Hero from "./components/Hero.jsx"
import Header from "./components/Header/Header.jsx"
import Projects from "./pages/Projects.jsx"
import Home from "./pages/Home.jsx"

function App() {

  return (
    <>
      <BrowserRouter>

        <Header/>

        <Routes>

          <Route path="/" element={<Home/>}/>

          <Route path="/projects" element={<Projects/>}/>

          <Route path="/about" element={<h1>About</h1>}/>

        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
