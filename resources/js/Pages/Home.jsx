import AboutBuilding from "@/Components/Home/AboutBuilding";
import Banner from "@/Components/Home/Banner";
import Price from "@/Components/Home/Price";
import LandingLayout from "@/Layouts/LandingLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const Home = () => {
    return (
        <LandingLayout>
            <Head title="Beranda" />
            <Banner />
            <AboutBuilding />
            <Price/>
        </LandingLayout>
    );
};

export default Home;
