import { tailwindStyles } from "../styles/tailwindStyles";
import Placehoder from "../../public/Layout/102/Placeholder-Image.png"
import { Button } from "../components/buttons/Button";

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
            <Button type="secondary">
              Learn More
            </Button>
            <Button type="outline">Sign Up</Button>
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
            <h5>Phone</h5>
            <p>Call us today</p>
            <p>+1 (555) 123-4567</p>
          </div>
          <div>
            <h5>Office</h5>
            <p>456 Example Ave, Sydney NSW 2000 AU</p>
            <p>Find us</p>
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
