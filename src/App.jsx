import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  ScrollRestoration,
  useLocation,
  Link
} from "react-router-dom";
import { GameDetail, Navbar } from "./components";
import { useEffect } from "react";



const InnerApp = () => {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<GameDetail />} />
    </Routes>
  );
};

const ContextWrapper = ({ children }) => {
  return <Router>{children}</Router>;
};

const App = () => {
  return (
    <ContextWrapper>
      <InnerApp />
    </ContextWrapper>
  );
};

export default App;
