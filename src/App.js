import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer'
import TableSelection from './pages/TableSelection';

function App() {
  return (
   <>
   <Nav/>
   {/* <Home /> */}
   <TableSelection />
   <Footer />
   </>
  );
}

export default App;
