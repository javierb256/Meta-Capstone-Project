import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer'
import TableSelection from './pages/TableSelection';
import ContactInformation from './components/ContactInformation';

function App() {
  return (
   <>
   <Nav/>
   {/* <Home /> */}
   {/* <TableSelection /> */}
   <ContactInformation/>
   <Footer />
   </>
  );
}

export default App;
