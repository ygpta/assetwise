import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import HomeIcon from "./ui/icons/home.svg";
import LoginIcon from "./ui/icons/log-in.svg";
import LogOutIcon from "./ui/icons/log-out.svg";
import MarketIcon from "./ui/icons/line-chart.svg";
import AnalysisIcon from "./ui/icons/pie-chart.svg";
import GoalsIcon from "./ui/icons/target.svg";
import SettingsIcon from "./ui/icons/sliders.svg";

// TODO: to uplift the session call to layout and pass them as a props to sidebar and other components

function Minisidebar() {
  const { pathname } = useRouter();

  const [activeTab, setActiveTab] = useState<string>(
    pathname.split("/")[1]!.toString()
  );

  const { data: sessionData } = useSession();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setActiveTab(event.currentTarget.text);
  };

  const Menu = [
    { id: 1, tag: HomeIcon, url: "/Home", name: "Home" },
    { id: 2, tag: MarketIcon, url: "/Market", name: "Market" },
    { id: 3, tag: AnalysisIcon, url: "/Analysis", name: "Analysis" },
    { id: 4, tag: GoalsIcon, url: "/Goals", name: "Goals" },
    { id: 5, tag: SettingsIcon, url: "/Settings", name: "Settings" },
  ];

  return (
    <div className="flex h-screen max-h-fit w-24 flex-col justify-between bg-white shadow-xl">
      {/* branding */}
      <div className="flex-grow">
        <div className="mx-auto mb-3 cursor-pointer border-b p-4 text-center align-middle text-2xl font-bold text-black">
          <span>Track</span>
          <span className="text-violet-600">r</span>
        </div>

        {/* side bar list */}
        <div className="mx-auto mb-2 p-4">
          <ul className="space-y-8">
            {Menu.map((Menu) => (
              <li
                key={Menu.id}
                className="item-center flex flex-col justify-center"
              >
                <Link
                  href={Menu.url}
                  onClick={handleClick}
                  className={`${
                    activeTab === Menu.name
                      ? "font-bold	 text-violet-600"
                      : " text-black"
                  }`}
                >
                  <Menu.tag className="mx-auto mb-2" />
                  <div className="text-center text-sm">{Menu.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        onClick={
          sessionData
            ? () => void signOut()
            : () => signIn("google", { callbackUrl: "http://localhost:3000/" })
        }
      >
        {sessionData ? (
          <div>
            <LogOutIcon className="mx-auto mb-2" />
            <div className="text-center text-sm">Sign out</div>
          </div>
        ) : (
          <div>
            <LoginIcon className="mx-auto mb-2" />
            <div className="text-center text-sm">Sign In</div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Minisidebar;

