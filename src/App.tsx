import Header from "./components/header";
import Menu from "./components/menu";
import { DataContextProvider } from "./context/dataContext";
import Sales from "./pages/Sales";
import Summary from "./pages/Summary";
import "./styles.css";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Menu />
        <main>
          <Header />
          <Summary />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
