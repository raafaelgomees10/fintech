import { ComponentProps, CSSProperties } from "react";

type DateInputProps = ComponentProps<"input"> & {
  label: string;
};

const generalStyles: CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};

const labelStyles: CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyles,
};

const inputStyles: CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyles,
};

const DateInput = ({ label, ...props }: DateInputProps) => {
  return (
    <div>
      <label style={labelStyles} htmlFor={label}>
        {label}
      </label>
      <input
        style={inputStyles}
        id={label}
        name={label}
        type="date"
        {...props}
      />
    </div>
  );
};

export default DateInput;
