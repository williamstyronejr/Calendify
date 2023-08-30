import Link from "next/link";

export const metadata = {
  title: "Settings",
  description: "User settings page",
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full">
      <header className="border-b border-black mb-8">
        <div className="flex flex-row flex-nowrap max-w-7xl mx-auto items-center py-8">
          <Link href="/calendar" className="w-10 h-10 mr-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6 12H18M6 12L11 7M6 12L11 17"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </Link>

          <h2 className="font-bold text-xl">Settings</h2>
        </div>
      </header>

      <div className="flex flex-row flex-nowrap max-w-7xl mx-auto">
        <aside className="shrink-0 grow-0 w-44 mr-8">
          <Link className="block py-2" href="/settings/genreal">
            General
          </Link>

          <Link className="block py-2" href="/settings/integrations">
            Integrations
          </Link>
        </aside>

        <div className="flex-grow bg-sky-500">{children}</div>
      </div>
    </section>
  );
}
