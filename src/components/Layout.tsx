import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Minisidebar from './Minisidebar';

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {

  return (
    <div className="flex flex-row justify-start bg-white align-middle">
      {/* <Sidebar /> */}
      <Minisidebar/>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
