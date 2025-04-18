import './App.css'
import "./reset.css";
import { Route, Routes } from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { About } from "./pages/About"
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import { Footer } from './components/Footer'
import { Signup } from './components/Auth/Signup'
import { Register } from './components/Auth/Register';
import { Redirect } from './pages/Redirect';

export const App = () =>  {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
      <Footer />
    </>
  )
}
