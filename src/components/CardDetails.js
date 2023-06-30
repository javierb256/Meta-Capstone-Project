import userProfile from "../assets/user.png";
import Group from "../assets/group.png";
import Calendar from "../assets/calendar.png";
import Clock from "../assets/clock.png";

function CardDetails() {
  return (
    <div className="paymentInfo-container">
      <div className="cardDetails paymentInfo-card">
        <h3>Card Details</h3>
        <hr></hr>
        <div className="card-info payment-card">
          <label for="name">Name on Card*</label>
          <input id="name" name="name" type="text"></input>
          <label for="cardNumber">Card Number*</label>
          <input id="cardNumber" name="cardNumber" type="text"></input>

          <div className="card-info-back">
            <div className="info-column">
              <label for="month">Exp.Month*</label>
              <select>
                <option value="1" selected>
                  01
                </option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="info-column">
              <label for="year">Exp.Year*</label>
              <select>
                <option value="2023" selected>
                  2023
                </option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                <option value="2032">2032</option>
                <option value="2033">2033</option>
              </select>
            </div>
            <div className="info-column">
              <label for="cvv">CVV</label>
              <input
                id="cvv"
                name="cvv"
                type="tel"
                inputMode="numeric"
                pattern="[0-9\s]"
                maxLength={3}
                autoComplete="cc-number"
                placeholder="ex: 123"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="review paymentInfo-card">
        <h3>Reservation Details</h3>
        <div className="reservation-review">
          <div className="reservation-detail">
            <img src={userProfile} alt="user icon" className="image" />
            <p>John Doe</p>
          </div>
          <div className="reservation-detail">
            <img src={Group} alt="group of users" />
            <p>3 Guests</p>
          </div>
          <div className="reservation-detail">
            <img src={Calendar} alt="calendar icon" />
            <p>5/23/23</p>
          </div>
          <div className="reservation-detail">
            <img src={Clock} alt="clock icon" />
            <p>7:00 PM</p>
          </div>
        <button type="submit" className="custom-button">Reserve Table</button>
        </div>
      </div>
    </div>
  );
}
export default CardDetails;
