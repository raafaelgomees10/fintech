import { useData } from "../context/dataContext";

const Summary = () => {
  const { data } = useData();
  console.log(data);
  return <div>Summary</div>;
};

export default Summary;
