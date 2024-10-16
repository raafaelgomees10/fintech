import Header from "./components/header";
import Menu from "./components/menu";
import { DataContextProvider } from "./context/dataContext";
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
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
