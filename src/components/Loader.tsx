import { useState, CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  borderColor: "red",
};

export const Loader = () => {
  const [loading,] = useState(true);
  const [color, setColor] = useState("");
  return (
    <>
        <div className="relative">
            <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-60 w-full h-full sweet-loading">
              <input
              id="loader"
                value={color}
                onChange={(input) => setColor(input.target.value)}
              />
              <ClipLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
        </div>
    </>
  );
};
