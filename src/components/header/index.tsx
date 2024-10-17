import DateRange from "../dateRange";
import MonthGroup from "../monthGroup";

const Header = () => {
  return (
    <header className="mb">
      <div className="mb">
        <DateRange />
      </div>
      <MonthGroup />
    </header>
  );
};

export default Header;
