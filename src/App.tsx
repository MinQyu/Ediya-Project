import Home from "./route/Home";
import Drink from "./route/Drink";
import News from "./route/News";
import Layout from "./components/Layout";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/drink" element={<Drink />} />
          <Route path="/news" element={<News />} />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
