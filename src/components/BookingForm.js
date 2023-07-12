import { useState } from "react";

function BookingForm(props) {
  const times = props.time;
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setDate("");
    setGuests("");
    setOccasion("");
    props.submit(e.target.data);
  };

  return (
    <>
      <h2>Reserve a Table</h2>
      <form className="bookingForm" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose a date</label>
        <input
          type="date"
          id="res-date"
          //returns the selected date inside the dispatch parameter for the availableTimes useReducer
          onChange={e => props.dispatch({ type: e.target.value })}
          required
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" required>
          {/* populates select element with options from availableTimes state */}
          {times?.map((element, index) => {
            return <option key={index}>{element}</option>;
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={e => setGuests(e.target.value)}
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={e => setOccasion(e.target.value)}
        >
          <option></option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          type="submit"
          value="Make Your reservation"
          className="custom-button"
        />
      </form>
    </>
  );
}

export default BookingForm;
