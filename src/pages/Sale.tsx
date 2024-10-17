import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IVenda } from "../context/dataContext";
import Loading from "../components/loading";

type VendaWithoutData = Omit<IVenda, "data">;

const Sale = () => {
  const { id } = useParams();

  const { data, loading } = useFetch<VendaWithoutData>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading) return <Loading />;

  if (data === null) return null;

  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preco{" "}
        {data.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  );
};

export default Sale;
