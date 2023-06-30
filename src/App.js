import './App.css';
import Nav from './components/Nav';
// import Home from './pages/Home';
import Footer from './components/Footer'
import TableConfirmation from './components/TableConfirmation';

function App() {
  return (
   <>
   <Nav/>
   {/* <Home /> */}
   {/* <TableSelection /> */}
   <TableConfirmation />
   <Footer />
   </> 
  );
}

export default App;
