import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from "./Components/SearchBar";
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import SingleSearchBar from "./Components/SingleSearchBar";
import LowerNavbar from "./Components/LowerNavbar";
import ListingDetails from './Components/ListingDetails';
import BookingPage from './Components/BookingPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/listings/:id" component={ListingDetails} />
        <Route path="/book/:id" component={BookingPage} />
      </Switch>
    </Router>
  );
};

export default App;
