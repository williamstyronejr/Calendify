import { ReactNode } from "react";
import Link from "next/link";

export default function CalendarLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-row flex-row w-full">
      <div className="flex flex-col flex-nowrap w-10 py-2 pr-2 mr-2 shrink-0">
        <div className="flex-grow">
          <Link className="w-10 h-10" title="Tasks" href="/tasks">
            <svg
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g
                    transform="translate(-258.000000, -1037.000000)"
                    fill="#000000"
                  >
                    <path d="M280.393,1047.43 L273.461,1059.44 C273.41,1059.59 273.335,1059.73 273.213,1059.84 C272.81,1060.22 272.177,1060.2 271.8,1059.8 L267.228,1055.58 C266.85,1055.18 266.871,1054.54 267.274,1054.17 C267.677,1053.79 268.31,1053.81 268.688,1054.21 L272.266,1057.51 L278.661,1046.43 C278.937,1045.96 279.548,1045.79 280.027,1046.07 C280.505,1046.34 280.669,1046.96 280.393,1047.43 L280.393,1047.43 Z M286,1037 L262,1037 C259.791,1037 258,1038.79 258,1041 L258,1065 C258,1067.21 259.791,1069 262,1069 L286,1069 C288.209,1069 290,1067.21 290,1065 L290,1041 C290,1038.79 288.209,1037 286,1037 L286,1037 Z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </Link>

          <Link className="w-10 h-10" title="Calendar" href="/calendar">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </g>
            </svg>
          </Link>
        </div>

        <div>
          <Link className="w-10 h-10" href="/settings/general">
            <svg
              fill="#000000"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M1703.534 960c0-41.788-3.84-84.48-11.633-127.172l210.184-182.174-199.454-340.856-265.186 88.433c-66.974-55.567-143.323-99.389-223.85-128.415L1158.932 0h-397.78L706.49 269.704c-81.43 29.138-156.423 72.282-223.962 128.414l-265.073-88.32L18 650.654l210.184 182.174C220.39 875.52 216.55 918.212 216.55 960s3.84 84.48 11.633 127.172L18 1269.346l199.454 340.856 265.186-88.433c66.974 55.567 143.322 99.389 223.85 128.415L761.152 1920h397.779l54.663-269.704c81.318-29.138 156.424-72.282 223.963-128.414l265.073 88.433 199.454-340.856-210.184-182.174c7.793-42.805 11.633-85.497 11.633-127.285m-743.492 395.294c-217.976 0-395.294-177.318-395.294-395.294 0-217.976 177.318-395.294 395.294-395.294 217.977 0 395.294 177.318 395.294 395.294 0 217.976-177.317 395.294-395.294 395.294"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>

      {children}
    </main>
  );
}
