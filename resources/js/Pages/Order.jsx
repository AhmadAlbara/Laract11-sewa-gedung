
import FormOrder from "@/Components/ui/landingpage/Order/FormOrder";
import OrderInstructions from "@/Components/ui/landingpage/Order/OrderInstructions";
import LandingLayout from "@/Layouts/LandingLayout";
import { Head } from "@inertiajs/react";

const Order = ({ gedungs, orderId ,auth}) => {
    const user = auth.user;

    return (
        <LandingLayout user={auth}>
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
