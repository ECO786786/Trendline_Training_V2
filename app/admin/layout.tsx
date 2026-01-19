
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 bg-gray-900 border-r border-gray-800">
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link 
                className="mb-2 flex h-20 items-end justify-start rounded-md bg-[#1e3a8a] p-4 md:h-40"
                href="/"
            >
                <div className="w-32 text-white md:w-40 font-bold text-xl">
                Trendline Admin
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <Link
                    href="/admin/dashboard"
                    className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-800 p-3 text-sm font-medium hover:bg-gray-700 hover:text-blue-300 md:flex-none md:justify-start md:p-2 md:px-3 text-white"
                >
                    Dashboard
                </Link>
                
                <div className="hidden h-auto w-full grow rounded-md bg-gray-900 md:block"></div>
                
                <form
                    action={async () => {
                        "use server";
                        await signOut({ redirectTo: "/auth/login" });
                    }}
                >
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-800 p-3 text-sm font-medium hover:bg-red-900/50 hover:text-red-300 md:flex-none md:justify-start md:p-2 md:px-3 text-white">
                        Sign Out
                    </button>
                </form>
            </div>
        </div>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-white">
          {children}
      </div>
    </div>
  );
}
