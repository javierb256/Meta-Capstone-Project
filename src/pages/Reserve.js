function Reserve() {
  return (
    <>
      <div className="reserve-header">
        <div className="reserve-overlay">
          <h1>Welcome to Little Lemon</h1>
        </div>
      </div>
      <section>
        <h2>Hours and Location</h2>
        <div className="reserve-info-container">
          <div>
            <h3>Business Hours</h3>
            <ul>
              <li>
                Mon <span>10:00 am - 8:30 pm</span>
              </li>
              <li>
                Tues <span>10:00 am - 8:30 pm</span>
              </li>
              <li>
                Wed <span>10:00 am - 8:30 pm</span>
              </li>
              <li>
                Thurs <span>10:00 am - 8:30 pm</span>
              </li>
              <li>
                Fri <span>10:00 am - 8:30 pm</span>
              </li>
              <li>
                Sat <span>8:30 am - 7:30 pm</span>
              </li>
              <li>
                Sun <span>8:30 am - 7:30 pm</span>
              </li>
            </ul>
          </div>
          <div>map</div>
        </div>
      </section>
      <section>
        <h3>Reserve a Table</h3>
        <div>progress bar</div>
        <div className="reserve-inputs">
          <div>
            <label for="date">Date</label>
            <input type="date" id="date" name="date"></input>
          </div>
          <div>
            <label for="time">Time</label>
            <input type="time" id="time" name="time"></input>
          </div>
          <div>
            <label for="guests">Guests</label>
            <input type="number" id="guests" name="guests"></input>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reserve;
