import MonthBtn from "../monthBtn";

const MonthGroup = () => {
  return (
    <div className="flex">
      <MonthBtn n={-3} />
      <MonthBtn n={-2} />
      <MonthBtn n={-1} />
      <MonthBtn n={0} />
    </div>
  );
};

export default MonthGroup;
