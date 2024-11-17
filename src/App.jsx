import SearchBar from "./Components/SearchBar";
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
// import SingleSearchBar from "./Components/SingleSearchBar";
import LowerNavbar from "./Components/LowerNavbar";
import ListingDetails from './Components/ListingDetails';
import BookingPage from './Components/BookingPage';

const App = () => {
  return (
    <div>
      <BookingPage />
      <Navbar />
      <SearchBar />
      <Categories />
      <Cards />
      <ListingDetails />
      <Footer />
      <LowerNavbar />
    </div>
  );
};

export default App;
