import MarioAdrianA from "../assets/Mario and Adrian A.jpg";
import MarioAdrianB from "../assets/Mario and Adrian b.jpg";
function About() {
  return (
    <>
      {/* About */}
      <section>
        <div>
          <div>
            <h3>Little Lemon</h3>
            <h4>Chicago</h4>
            <p>lorem</p>
          </div>
          <img
            src={MarioAdrianA}
            alt="Owners Mario and Adrian Talking in a kitchen"
            width={200}
            height={200}
          ></img>
          <img
            src={MarioAdrianB}
            alt="Ownser Mario and Adrian preparing a dish"
            width={200}
            height={200}
          ></img>
        </div>
      </section>
    </>
  );
}

export default About;
