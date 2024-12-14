import Navbar from "@/components/Header/Navbar";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
        {/* LEFT */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]   p-3">
            <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
                <Image src="/logo.png" alt="logo" width={32} height={32} />
                <span className="hidden lg:block mt-2 text-black">School Dashboard</span>
            </Link>
            {/* MENUS */}
            <Menu/>
        </div>
        {/* RIGHT */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA]">
          <Navbar/>
          {children}
        </div>
    </div>
  );
}
