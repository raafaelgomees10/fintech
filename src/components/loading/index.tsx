import { CSSProperties } from "react";

const styles: CSSProperties = {
  border: "var(--gap-s) solid var(--color-2)",
  borderRightColor: "var(--color-4)",
  width: "var(--gap)",
  height: "var(--gap)",
  borderRadius: "50%",
  animation: "spin 1s infinite",
};

const Loading = () => {
  return (
    <div style={styles}>
      <style>
        {`
            @keyframes spin{
                to{
                transform: rotate(360deg);
                }
            }
            `}
      </style>
    </div>
  );
};

export default Loading;
