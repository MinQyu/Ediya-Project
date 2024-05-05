import Home from "./route/Home";
import Drink from "./route/Drink";
import EdiyaNews from "./route/EdiyaNews";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/drink" element={<Drink />} />
          <Route path="/ediya-news" element={<EdiyaNews />} />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
