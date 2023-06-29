import { useState } from "react";

function ContactInformation() {
  const [occasion, setOccasion] = useState(false);
  const toggleOccasion = () => {
    setOccasion(!occasion);
  };
  return (
    <div className="contact-container container">
      <h2>Contact Information</h2>
      <hr></hr>

      <form>
        <div className="contact-inputs">
          <label for="name">Name*</label>
          <input type="text" id="name" name="name" required />
          <label for="phone">Phone Number*</label>
          <input type="tel" id="phone" name="phone" />
          <label for="email">Email*</label>
          <input type="email" id="email" name="email" />
        </div>

        <label for="occasion">Select an occasion</label>
        <div className="select">
          <select
            id="occasion"
            name="occasion"
            onClick={toggleOccasion}
            className={occasion ? "active" : ""}
          >
            <option value="">Occasion</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
            <option value="retirement">Retirement</option>
            <option value="graduation">Graduation</option>
          </select>
          <span className={occasion ? 'arrow active' : 'arrow'}></span>
        </div>

        <h4>Additional Comments</h4>
        <textarea></textarea>
        <button type="submit">Payment Information</button>
      </form>
    </div>

  );
}

export default ContactInformation;
