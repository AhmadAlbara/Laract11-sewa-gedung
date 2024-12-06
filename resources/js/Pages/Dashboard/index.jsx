import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    const user = auth.user;
    return (
        <AuthenticatedLayout user={user}>
            <Head title="Dashboard" />

            <div className="p-8 bg-gray-200 min-h-screen">
                ini adalah Dashboard
            </div>
        </AuthenticatedLayout>
    );
}
