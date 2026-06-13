import { Outlet } from "react-router-dom";

import {
  Sidebar,
  Navbar,
  MobileNav,
} from "../components/navigation";

export default function AppLayout() {
  return (
    <div className="h-screen bg-black text-white">
      <div className="flex h-full">
        <Sidebar />

        <div className="flex flex-col flex-1 overflow-hidden">
          <Navbar />

          <main
            className="
              flex-1
              overflow-y-auto
              pb-20
              lg:pb-0
            "
          >
            <Outlet />
          </main>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}