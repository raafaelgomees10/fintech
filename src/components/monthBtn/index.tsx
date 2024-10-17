import * as S from "./styles";
import { useData } from "../../context/dataContext";

const nameMonth = (n: number) => {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  const name = new Intl.DateTimeFormat("pt-br", { month: "long" }).format(date);

  return name;
};

const formatDate = (date: Date) => {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = String(date.getFullYear());

  return `${yyyy}-${mm}-${dd}`;
};

const MonthBtn = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useData();

  const setMonth = (n: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  };

  return <S.Button onClick={() => setMonth(n)}>{nameMonth(n)}</S.Button>;
};

export default MonthBtn;
