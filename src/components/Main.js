import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../data/formAPI";
import Nav from "./Nav";
import Footer from "./Footer";
import BookingPage from "../pages/BookingPage";
import Homepage from "../pages/Homepage";
import ConfirmedBooking from "../components/ConfirmedBooking";
import ContactInformation from "./ContactInformation";

export const updateTimes = (state, action) => {
  //The first action type would update the options to the entered times
  if (action.type.length !== 0) return fetchAPI(new Date(action.type));
  return state;
};

//sets the initiale times on page load
export const initializeTimes = fetchAPI(new Date());

function Main() {
  //reducer that changes available times first on initial times or updated on date selection
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  const navigate = useNavigate();

  // when form is submited will navigate to table confirmation when return value is true
  function submitForm(formData) {
    if (submitAPI(formData) === true) {
      navigate("/contact-information");
    }
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              time={availableTimes}
              dispatch={dispatch}
              submit={submitForm}
            />
          }
        ></Route>
        <Route
          path="/booking-confirmation"
          element={<ConfirmedBooking />}
        ></Route>
        <Route
          path="/contact-information"
          element={<ContactInformation />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
