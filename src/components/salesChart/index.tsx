import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IVenda } from "../../context/dataContext";

type SaleDay = {
  date: string;
  pago: number;
  processando: number;
  falha: number;
};

const transformData = (data: IVenda[]): SaleDay[] => {
  const days = data.reduce((acc: { [key: string]: SaleDay }, item) => {
    const day = item.data.split(" ")[0];

    if (!acc[day]) {
      acc[day] = {
        date: day,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }

    acc[day][item.status] += item.preco;

    return acc;
  }, {});

  return Object.values(days).map((day) => ({
    ...day,
    date: day.date.substring(5),
  }));
};

const SalesChart = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={transformedData}>
        <XAxis dataKey="date" fontSize="1rem" />
        <YAxis fontSize="1.125rem" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
