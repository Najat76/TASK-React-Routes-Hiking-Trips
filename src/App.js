import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="page-top">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<TripsList />} />
        <Route path="/trip-detail/:tripId" element={<TripDetail />} />
      </Routes>
    </div>
  );
}

export default App;
// Bonus: https://stackoverflow.com/questions/42659611/reactjs-use-slug-instead-of-id-in-the-url-with-react-router
