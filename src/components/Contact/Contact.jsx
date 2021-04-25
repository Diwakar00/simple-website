import path1 from "../../images/contactus.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <img className="contact" src={path1} alt="contact us img"></img>
    </div>
  );
};

export default Contact;
