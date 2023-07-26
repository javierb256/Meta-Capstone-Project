import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../data/formAPI";
import Nav from "./Nav";
import Footer from "./Footer";
import BookingPage from "../pages/BookingPage";
import Homepage from "../pages/Homepage";
import ContactInformation from "../pages/ContactInformation";
import BookingConfirmed from "../pages/BookingConfirmed";
import About from "../pages/About";
import Specials from "./Specials";

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
      navigate("/Meta-Capstone-Project/booking-confirmed");
    }
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/Meta-Capstone-Project" element={<Homepage />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Meta-Capstone-Project/about" element={<About />}></Route>
        <Route
          path="/Meta-Capstone-Project/booking"
          element={
            <BookingPage
              time={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/Meta-Capstone-Project/booking-confirmed" element={<BookingConfirmed />}></Route>
        <Route path="/Meta-Capstone-Project/menu" element={<Specials />}></Route>
        <Route
          path="/Meta-Capstone-Project/contact-information"
          element={<ContactInformation submitForm={submitForm} />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
