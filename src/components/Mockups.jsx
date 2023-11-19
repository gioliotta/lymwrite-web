import screenshotHome from "../assets/screenshot-home.png";
import screenshotText from "../assets/screenshot-text.png";

function Mockups() {
  return (
    <figure className="container-mockups">
      <img src={screenshotHome} alt="LymWrite Screenshot" className="mockup" />
      <img src={screenshotText} alt="LymWrite Screenshot" className="mockup" />
    </figure>
  );
}

export default Mockups;
