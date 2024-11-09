import SearchBar from "./Components/SearchBar";
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import SingleSearchBar from "./Components/SingleSearchBar";
import LowerNavbar from "./Components/LowerNavbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <SingleSearchBar />
      <SearchBar />
      <Categories />
      <Cards />
      <Footer />
      <LowerNavbar />
    </div>
  );
};

export default App;
