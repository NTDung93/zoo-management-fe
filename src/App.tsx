import Footer from "./components/Footer/Footer";
import Header2 from "./components/Header/Header2";
import Subscribe from "./components/Footer/Subscribe";
import { Outlet } from "react-router-dom";
import SearchPopup from "./components/Search/SearchPopup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer />
      <SearchPopup />
      <Header2 />
      <Outlet />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
