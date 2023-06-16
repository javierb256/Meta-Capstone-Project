// import MainImage from "../assets/restauranfood.jpg";
import MarioAdrianA from "../assets/Mario and Adrian A.jpg";
import MarioAdrianB from "../assets/Mario and Adrian b.jpg";

function Home() {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-info">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <div>
                <button>Reserve a Table</button>
            </div>
          </div>
          <div className="header-img">
          </div>
        </div>
      </header>

      <main>
        {/* This weeks specials  */}
        <section className="specials">
          <div className="specials-container">
            <h2>This Weeks Specials!</h2>
            <button>Online Menu</button>
          </div>
          <div>card</div>
          <div>card</div>
          <div>card</div>
        </section>

        {/* Testimonials */}
        <section>
          <div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
          </div>
        </section>

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
      </main>
    </>
  );
}

export default Home;
