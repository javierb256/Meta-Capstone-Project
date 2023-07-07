// import Specials from "./Specials";
// import Testimonials from "./CustomersSay";
// import Chicago from "./Chicago";
// import { Routes, Route } from "react-router-dom";
// import HomePage from '../pages/Homepage';
// import BookingPage from '../pages/BookingPage';
import BookingPage from "../pages/BookingPage";
import { useReducer, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Routes, Route} from "react-router-dom";

// import Footer from "./components/Footer";
import Homepage from "../pages/Homepage";

const updateTimes = (state, action)=> {
  //The first action type would update the options to the entered times
  // if(action.type === 'changed') return [{time: '1:00'}, {time: '2:00'}];
  if(action.type === 'changed') return state;
  if(action.type === '2023-07-11') return [{time: '1:00'}, {time: '3:00'}]
  return state;
}

const initializeTimes = [
{time: '17:00'},
{time: '18:00'},
{time: '19:00'},
{time: '20:00'},
{time: '21:00'},
]



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
    {/* <Homepage /> */}
    
    </>

  );
}

export default Main;
