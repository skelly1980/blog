import { useNavigate as useReactRouterNavigate } from "react-router-dom";



export const useNavigate = () => {
    const navigate = useReactRouterNavigate();

  const goToAbout = () => {
    navigate("/about");
  }
  const goToHome = () => {
    navigate("/home");
  }
  const goToBlog = () => {
    navigate("/blogs");
  }
  const goToContact = () => {
    navigate("/contact");
  }
  
  return {
    goToAbout,
    goToHome,
    goToBlog,
    goToContact,
  }
}