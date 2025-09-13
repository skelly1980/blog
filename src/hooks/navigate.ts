import { useNavigate as useReactRouterNavigate } from "react-router-dom";

export const useNavigate = () => {
    const navigate = useReactRouterNavigate();

  const goToAbout = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  }
  const goToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  }
  const goToBlog = () => {
    navigate("/blogs");
    window.scrollTo(0, 0);
  }
  const goToContact = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  }
  
  return {
    goToAbout,
    goToHome,
    goToBlog,
    goToContact,
  }
}