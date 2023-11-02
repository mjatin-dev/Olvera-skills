import "./App.css";
import Layout from "./components/Layout/index.js";
import Dashboard from "./Pages/Dashboard/index.js";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}

export default App;
