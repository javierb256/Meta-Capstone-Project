import BookingPage from "../pages/BookingPage";
import {useReducer} from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Routes, Route} from "react-router-dom";
import { fetchAPI, submitAPI } from "../data/formAPI";
import Homepage from "../pages/Homepage";

const updateTimes = (state, action)=> {
  //The first action type would update the options to the entered times
  if(action.type.length !== 0) return fetchAPI(new Date(action.type));
  return state;
}

const initializeTimes = fetchAPI(new Date());

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage time={availableTimes} dispatch={dispatch}/>}></Route>
      </Routes>
    <Footer />    
    </>

  );
}

export default Main;
