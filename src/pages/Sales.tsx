import SaleItem from "../components/saleItem";
import { useData } from "../context/dataContext";

const Sales = () => {
  const { data } = useData();

  if (data === null) return null;

  return (
    <div>
      {data.map((sale) => (
        <li>
          <SaleItem sale={sale} />
        </li>
      ))}
    </div>
  );
};

export default Sales;
