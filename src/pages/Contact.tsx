import { ButtonOutline } from "../components/buttons/ButtonOutline";
import { ButtonSecondary } from "../components/buttons/ButtonSecondary";
import { tailwindStyles } from "../styles/tailwindStyles";
import Placehoder from "../../public/Layout/102/Placeholder-Image.png"

export const Contact = () => {
  return (
    <>
    <section className={`${tailwindStyles.container}`}>
      <div className={`${tailwindStyles.flexBetween}`}>
        <div className="flex-1">
          <small>Connect</small>
          <h1 className="uppercase">Get In Touch</h1>
        </div>
        <div className="flex-1">
          <p>We'd love to hear from you! Whether you have questions, feedback, or just want to chat, reach out to us.</p>
          <div className={`${tailwindStyles.btnSpace} pt-8`}>
            <ButtonSecondary>
              Learn More
            </ButtonSecondary>
            <ButtonOutline>Sign Up</ButtonOutline>
          </div>
        </div>
      </div>
    </section>
    <section className={tailwindStyles.container}>
      <div>
        <small>Connect</small>
        <h2>Get in Touch</h2>
        <p>We're hear to answer your questions</p>
      </div>
      <div className={`${tailwindStyles.flexBetween}`}>
        <div className="flex-1">
          <div>
            <h5>Email</h5>
            <p>Reach us anytime</p>
            <p>info@webdevblog.com</p>
          </div>
          <div>
            <h5>Email</h5>
            <p>Reach us anytime</p>
            <p>info@webdevblog.com</p>
          </div>
        </div>
        <div className="flex-1">
          <img src={Placehoder} alt="" />
        </div>
      </div>
    </section>
    </>
  );
};
