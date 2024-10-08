import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#eeee", // Warna abu-abu terang
                secondary: "#3c3c3c", // Warna abu-abu gelap
                accent: "#31b380", // Warna hijau
                customYellow: "#ffb822", // Warna kuning terang
                customGray: "#7f7f7f", // Warna abu-abu sedang
                customMint: "#e7fff6", // Warna hijau mint
            },
        },
    },

    plugins: [forms],
};
