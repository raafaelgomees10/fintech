import { useState } from "react";
import DateRange from "../dateRange";
import MonthGroup from "../monthGroup";

const Header = () => {
  const [title, setTitle] = useState("Summary");
  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg3">{title}</h1>
      </div>
      <MonthGroup />
    </header>
  );
};

export default Header;
