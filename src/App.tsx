import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path="/product/:product" element={<ProductDetail />}>
            <Route path="404" element={<div>404 Not Found</div>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
