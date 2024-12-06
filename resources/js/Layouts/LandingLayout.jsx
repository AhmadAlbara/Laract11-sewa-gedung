import React from "react";
import NavigationBar from "@/Components/ui/landingpage/NavigationBar";
import Footer from "@/Components/ui/landingpage/Footer";
import ScrollToTop from "@/Components/elements/ScrollToTop";
const LandingLayout = ({ children,user}) => {
    console.log(user);
    
    return (
        <div>
            <NavigationBar user={user}/>
            <main className="w-full">{children}</main>
            <Footer />
            <ScrollToTop/>
        </div>
    );
};

export default LandingLayout;
