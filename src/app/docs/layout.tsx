import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:grid sm:grid-cols-6">
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <div className="border-r border-b p-3 col-span-4 overflow-y-auto h-screen-navbar shadow-lg overflow-hidden">
        {children}
        <Footer />
      </div>
    </div>
  );
}
