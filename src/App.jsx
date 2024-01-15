import Hero from "./components/Hero.jsx"
import Header from "./components/Header/Header.jsx"
import Projects from "./pages/Projects.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>

        <Header/>

        <Routes>

          <Route path="/" element={<Hero/>}/>

          <Route path="/projects" element={<Projects/>}/>

          <Route path="/about" element={<h1>About</h1>}/>






        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
