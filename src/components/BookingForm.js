import { useState } from "react";

function BookingForm() {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setDate("");
    // setAvailableTimes("");
    setGuests("");
    setOccasion("");
    // console.log(date,availableTimes,guests,occasion)
  };

  return (
    <form className="bookingForm" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose a date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      {/* <select id="res-time" onChange={e=> setAvailableTimes(e.target.value)}>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select> */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={e=> setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        className="custom-button"
      />
    </form>

  );
}

export default BookingForm;
