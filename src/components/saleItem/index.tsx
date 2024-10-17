import { NavLink } from "react-router-dom";
import { IVenda } from "../../context/dataContext";

const SaleItem = ({ sale }: { sale: IVenda }) => {
  return (
    <div className="sale box">
      <NavLink to={`/sales/${sale.id}`} style={{ fontFamily: "monospace" }}>
        {sale.id}
      </NavLink>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default SaleItem;
