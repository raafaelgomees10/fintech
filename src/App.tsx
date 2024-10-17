import Sale from "./pages/Sale";
import Sales from "./pages/Sales";
import Menu from "./components/menu";
import Summary from "./pages/Summary";
import Header from "./components/header";
import { DataContextProvider } from "./context/dataContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Menu />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/vendas" element={<Sales />} />
              <Route path="/vendas/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
