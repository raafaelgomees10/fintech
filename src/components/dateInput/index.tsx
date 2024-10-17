import * as S from "./styles";
import { ComponentProps } from "react";

type DateInputProps = ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...props }: DateInputProps) => {
  return (
    <div>
      <S.Label htmlFor={label}>{label}</S.Label>
      <S.Input id={label} name={label} type="date" {...props} />
    </div>
  );
};

export default DateInput;
