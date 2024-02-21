import Home from "./route/Home";
import Drink from "./route/Drink";
import News from "./route/News";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/drink" element={<Drink />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
