import React from "react";

import LinkItem from "./LinkItem";
import { FaChartBar } from "react-icons/fa";

import {  FaBuilding } from "react-icons/fa6";

import { BsBox } from "react-icons/bs";
const Sidebar = ({ isSidebarOpen }) => {


       const quotes = [
           "The best way to get started is to quit talking and begin doing. - Walt Disney",
           "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
           "Don’t let yesterday take up too much of today. - Will Rogers",
           "You learn more from failure than from success. Don’t let it stop you. Failure builds character. - Unknown",
           "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
       ];
 
    const linkData = [
        {
            href: "/dashboard",
            icon: FaChartBar,
            text: "Dashboard",
        },
        {
            href: "/pesanan",
            icon: BsBox,
            text: "Pesanan",
        },
        {
            href: "/gedung",
            icon: FaBuilding,
            text: "Semua Gedung",
        },
    ];
    return (
        <aside
            className={`fixed top-0 left-0 z-10 w-64 h-screen pt-20 bg-white border-r border-gray-200 sm:translate-x-0 transition-transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="h-full px-3 pb-4 overflow-y-auto flex flex-col justify-between">
                <ul className="space-y-2 font-medium">
                    {linkData.map((link, index) => (
                        <LinkItem key={index} {...link} />
                    ))}
                </ul>
                <div className="w-full h-[200px] bg-accent rounded-lg  text-center text-white flex flex-col items-center  justify-center">
                    <h1 className="mb-2 text-2xl font-bold">Quotes</h1>
                    <p className="px-4 text-sm font-bold">{quotes[Math.floor(Math.random() * quotes.length)]}</p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
