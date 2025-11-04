import './App.css'
import "./reset.css";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout.tsx";
import { Home } from './pages/Home'
import { About } from "./pages/About"
import { Blogs } from './pages/Blogs'
import { Contact } from './pages/Contact'
import { Signup } from './components/Auth/Signup'
import { Register } from './components/Auth/Register';
import { Redirect } from './pages/Redirect';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signup" element={<Signup toggleSignUp={() => {}} />} />
      <Route path="register" element={<Register onToggleMode={() => {}} />} />
      <Route path="*" element={<Redirect />} />
    </Route>
  )
)

export const App = () =>  {
  return <RouterProvider router={router} />
}
