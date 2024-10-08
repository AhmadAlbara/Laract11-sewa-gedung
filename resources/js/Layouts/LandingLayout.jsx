import React from "react";
import NavigationBar from "@/Components/NavigationBar";
import Footer from "@/Components/Footer";
import ScrollToTop from "@/Components/ScrollToTop";
const LandingLayout = ({ children }) => {
    return (
        <div>
            <NavigationBar />
            <main className="w-full">{children}</main>
            <Footer />
            <ScrollToTop/>
        </div>
    );
};

export default LandingLayout;
