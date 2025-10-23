import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartProvider";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
    <Header />
      <main className="main-content">
    <CartProvider>
      <Routes>
        {/* <Route path="/" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} /> */}
          <Route path="/" element={<ItemListContainer titulo="Bienvenidos" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
      </CartProvider>
      </main>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
