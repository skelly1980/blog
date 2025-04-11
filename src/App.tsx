import './App.css'
import { Route, Routes } from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { About } from "./pages/About"
  import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import { Footer } from './components/Footer'

export const App = () =>  {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
