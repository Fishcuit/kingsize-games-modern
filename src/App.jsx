import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { GameDetail } from "./components";
import { Scrolll } from "./components";

const App = () => {
  return (
    <Router>
      <Scrolll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/:id" element={<GameDetail />} />
        </Routes>
      </Scrolll>
    </Router>
  );
};

export default App;
