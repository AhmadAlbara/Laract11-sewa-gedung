import FormOrder from "@/Components/ui/landingpage/Order/FormOrder";
import OrderInstructions from "@/Components/ui/landingpage/Order/OrderInstructions";
import LandingLayout from "@/Layouts/LandingLayout";
import { Head } from "@inertiajs/react";

const Order = ({ gedungs, orderId, auth }) => {
    const user = auth.user;

    return (
        <LandingLayout user={user}>
            <Head title="Pemesanan Gedung" />
            <section className="max-w-7xl mx-auto mt-20">
                <h1 className="text-center text-4xl mb-10 font-bold text-accent">
                    Form Pemesanan Gedung
                </h1>
                <div className="flex">
                    <OrderInstructions />
                    <FormOrder gedungs={gedungs} orderId={orderId} />
                </div>
                <div className="flex-1 mr-6">
                    <h2 className="text-2xl font-bold mb-4">
                        Informasi Gedung
                    </h2>
                    <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Nama Gedung
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Harga
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gedungs.map((gedung) => (
                                <tr
                                    key={gedung.id}
                                    className="odd:bg-white even:bg-gray-50 transition duration-300 ease-in-out hover:bg-gray-100"
                                >
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        {gedung.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        Rp{" "}
                                        {gedung.price.toLocaleString("id-ID")}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </LandingLayout>
    );
};

export default Order;
