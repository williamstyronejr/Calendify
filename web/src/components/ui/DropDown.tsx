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
            className="flex align-left rounded-md p-2 bg-sky-500"
            type="button"
            onClick={() => {
              setActive((old) => !old);
            }}
          >
            <div className="flex-grow mr-2">{value !== "" ? value : title}</div>

            <span
              className={`transition-transform ${active ? "rotate-180" : ""}`}
            >
              up
            </span>
          </button>

          <div className="relative w-full">
            <div
              className={`${
                active ? "flex" : "hidden"
              } flex-col flex-nowrap absolute w-full shadow-md z-10 origin-[top_center] bg-white`}
            >
              {options.map((option) => (
                <button
                  key={`select-${option}`}
                  className="transition-colors"
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
