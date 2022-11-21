import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
// import Sidebar from "./components/Sidebar"
import About from "./pages/About"
import Articles from "./pages/Articles"
import Contact from "./pages/Contact"
import Courses from "./pages/Courses"
import Home from "./pages/Home"

function App() {
  const [isActive, setActive] = useState("")
  const activeLink = (name) => {
    setActive(name)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home isActive={isActive} setActive={activeLink} />}
        />
        <Route
          exact
          path="/articles"
          element={<Articles isActive={isActive} setActive={activeLink} />}
        />
        <Route
          exact
          path="/contact"
          element={<Contact isActive={isActive} setActive={activeLink} />}
        />
        <Route
          exact
          path="/courses"
          element={<Courses isActive={isActive} setActive={activeLink} />}
        />
        <Route
          exact
          path="/about"
          element={<About isActive={isActive} setActive={activeLink} />}
        />
      </Routes>
      <Navbar />
    </BrowserRouter>
  )
}

export default App
