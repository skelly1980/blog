import "./App.css";
import "./reset.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout.tsx";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";
import { Coding } from "./pages/coding.tsx";
import { Signup } from "./components/Auth/Signup";
import { Register } from "./components/Auth/Register";
import { Redirect } from "./pages/Redirect";
import { Hockey } from "./pages/hockey.tsx";
import { Outdoors } from "./pages/outdoors.tsx";
import { createUser } from "./api/users.ts";
import { ReactQueryProvider } from "./providers/ReactQueryProvider.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="coding" element={<Coding />} />
      <Route path="hockey" element={<Hockey />} />
      <Route path="outdoors" element={<Outdoors />} />
      <Route path="signup" element={<Signup toggleSignUp={() => {}} />} />
      <Route
        path="register"
        element={<Register createUser={createUser} onToggleMode={() => {}} />}
      />
      <Route path="*" element={<Redirect />} />
    </Route>,
  ),
);

export const App = () => {
  return(<ReactQueryProvider>
    <RouterProvider router={router} />
  </ReactQueryProvider>
  )
};
  
