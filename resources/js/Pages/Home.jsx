import AboutBuilding from "@/Components/ui/landingpage/Home/AboutBuilding";
import Banner from "@/Components/ui/landingpage/Home/Banner";
import Price from "@/Components/ui/landingpage/Home/Price";
import LandingLayout from "@/Layouts/LandingLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const Home = ({auth}) => {
    const user = auth.user;
    return (
        <LandingLayout user={user}>
            <Head title="Beranda" />
            <Banner />
            <AboutBuilding />
            <Price/>
        </LandingLayout>
    );
};

export default Home;
