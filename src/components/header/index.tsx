import * as S from "./styles";
import DateRange from "../dateRange";
import MonthGroup from "../monthGroup";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = useState("Resumo");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo";
    } else if (location.pathname === "/vendas") {
      setTitle("Vendas");
      document.title = "Fintech | Vendas";
    }
  }, [location]);

  return (
    <header className="mb">
      <S.Content className="mb">
        <DateRange />
        <h1 className="box bg3">{title}</h1>
      </S.Content>
      <MonthGroup />
    </header>
  );
};

export default Header;
