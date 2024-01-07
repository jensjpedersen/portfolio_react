import Hero from "./pages/Hero.jsx"
import Nav from "./pages/Nav.jsx"
import Projects from "./pages/Projects.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav/>}>

                        <Route index element={<Hero/>}/>

                        <Route path="projects" element={<Projects/>}/>

                        <Route path="about" element={<h1>About</h1>}/>

                        <Route path="*" element={<h1>404</h1>}/>

                    </Route>
                </Routes>

            </BrowserRouter>


        </>
    )
}

export default App
