import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import { DataContextProvider } from "./context/dataContext";
import Sales from "./pages/Sales";
import Summary from "./pages/Summary";
import "./styles.css";
import Sale from "./pages/Sale";

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
              <Route path="/sales" element={<Sales />} />
              <Route path="/sales/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
