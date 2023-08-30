import { useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

const DropDown = ({
  options,
  value,
  changeValue,
  title = "",
}: {
  options: string[];
  value: string;
  title?: string;
  changeValue: Function;
}) => {
  const [active, setActive] = useState(false);
  const ref = useOutsideClick({
    active,
    closeEvent: () => {
      setActive(false);
    },
    ignoreButton: true,
  });

  return (
    <>
      <div className="w-full" ref={ref}>
        <div className={`t ${active ? "" : ""}`}>
          <button
            className="flex align-left rounded-md p-2 bg-slate-100 hover:bg-slate-300 border border-slate-500"
            type="button"
            onClick={() => {
              setActive((old) => !old);
            }}
          >
            <div className="flex-grow mr-2">{value !== "" ? value : title}</div>

            <span
              className={`transition-transform ${
                active ? "rotate-90" : "-rotate-90"
              }`}
            >
              &gt;
            </span>
          </button>

          <div className="relative w-full">
            <div
              className={`${
                active ? "flex" : "hidden"
              } flex-col flex-nowrap absolute w-full shadow-md z-10 origin-[top_center] bg-slate-100`}
            >
              {options.map((option) => (
                <button
                  key={`select-${option}`}
                  className="transition-colors my-0.5 py-0.5 hover:bg-slate-300"
                  type="button"
                  onClick={() => {
                    setActive(false);
                    changeValue(option);
                  }}
                  disabled={value === option}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
