import Footer from "./components/Footer/Footer";
import Header2 from "./components/Header/Header2";
import Subscribe from "./components/Footer/Subscribe";
import { Outlet } from "react-router-dom";
import SearchPopup from "./components/Search/SearchPopup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "../src/assets/js/lib/jquery-3.6.0.min.js";
// import "../src/assets/js/lib/bootstrap.bundle.min.js";
// import "../src/assets/js/lib/slick.js";
// import "../src/assets/js/lib/viewport.js";
// import "../src/assets/js/lib/jquery.magnific-popup.js";
// import "../src/assets/js/lib/jquery.filterizr.min.js";
// import "../src/assets/js/lib/odometer.js";
// import "../src/assets/js/app.js";

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
