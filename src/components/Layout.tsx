import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {

  return (
    <div className="flex flex-row justify-start bg-white align-middle">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
