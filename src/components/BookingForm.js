import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import dayjs from "dayjs";

function BookingForm(props) {
  const times = props.time;
  const [occasion, setOccasion] = useState("");

  const minDate = dayjs().format("MM/DD/YYYY");
  const formik = useFormik({
    initialValues: {
      date: dayjs().format("YYYY-MM-DD"),
      time: "",
      guests: "1",
      occasion: "",
    },
    validationSchema: Yup.object({
      guests: Yup.number()
        .integer()
        .min(1, "minimum guests of 1")
        .required("Must enter number of guests"),
      date: Yup.date()
        .min(minDate, "date must be today or later")
        .required("Required"),
      time: Yup.string()
        .required("Please select a time")
        .label("Choose a time"),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <h2>Reserve a Table</h2>
      <form className="bookingForm" onSubmit={formik.handleSubmit}>
        <label htmlFor="date">Choose a date</label>
        <input
          type="date"
          id="date"
          //returns the selected date inside the dispatch parameter for the availableTimes useReducer
          onClick={e => props.dispatch({ type: e.target.value })}
          {...formik.getFieldProps("date")}
        />
        {formik.touched.date && formik.errors.date ? (
          <div>{formik.errors.date}</div>
        ) : null}

        <label htmlFor="time">Choose time</label>
        <select id="time" {...formik.getFieldProps("time")}>
          {/* populates select element with options from availableTimes state */}
          {times?.map((element, index) => {
            return <option key={index}>{element}</option>;
          })}
        </select>

        {formik.touched.time && formik.errors.time ? (
          <div>{formik.errors.time}</div>
        ) : null}
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          min="1"
          id="guests"
          {...formik.getFieldProps("guests")}
        />
        {formik.touched.guests && formik.errors.guests ? (
          <div>{formik.errors.guests}</div>
        ) : null}
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
        <button
          className="custom-button"
          type="submit"
          disabled={!(formik.isValid && formik.dirty)}
        >
          Make Reservation
        </button>
      </form>
    </>
  );
}

export default BookingForm;
