import FormOrder from "@/Components/Order/FormOrder";
import OrderInstructions from "@/Components/Order/OrderInstructions";
import LandingLayout from "@/Layouts/LandingLayout";
import { Head } from "@inertiajs/react";

const Order = ({ gedungs, orderId }) => {

    return (
        <LandingLayout>
            <Head title="Pemesanan Gedung" />
            <section className="max-w-7xl mx-auto mt-20  ">
                <h1 className="text-center text-4xl mb-10 font-bold text-accent">
                    Form Pemesanan Gedung
                </h1>
                <div className="flex">
                    <OrderInstructions />
                    <FormOrder gedungs={gedungs} orderId={orderId} />
                </div>
            </section>
        </LandingLayout>
    );
};

export default Order;
