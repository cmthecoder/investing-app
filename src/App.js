import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Benefits from "./pages/Benefits";
import History from "./pages/History";
import Home from "./pages/Home";
import Invest from "./pages/Invest";
import Resources from "./pages/Resources";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/history'
          element={<History />}
        />
        {/* <Route
          path='/benefits'
          element={<Benefits />}
        /> */}
        {/* <Route
          path='/invest'
          element={<Invest />}
        /> */}
        {/* <Route
          path='/resources'
          element={<Resources />}
        /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
