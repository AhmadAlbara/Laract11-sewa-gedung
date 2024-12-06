
import Footer from "@/Components/ui/dashboard/Footer";
import Navbar from "@/Components/ui/dashboard/Navbar";
import Sidebar from "@/Components/ui/dashboard/Sidebar";
import { useState } from "react";


export default function AuthenticatedLayout({ user, children }) {
    console.log(user);
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="">
            <Navbar user={user} toggleSidebar={toggleSidebar} />
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <main className="text-primary-light bg-primary-dark p-4 sm:ml-64 mt-14 min-h-screen">
                {children}
                <Footer />
            </main>
        </div>
    );
}
