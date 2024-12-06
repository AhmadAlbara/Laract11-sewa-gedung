import InputError from "@/Components/elements/InputError";
import TextInput from "@/Components/elements/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form
                onSubmit={submit}
                className="px-8 py-10 w-1/2 text-center flex flex-col  justify-center"
            >
                <h1 className="text-2xl font-bold text-secondary mb-2">
                    Sign In
                </h1>
                <p className="text-sm text-customGray mb-8">
                    Login to connect with Us
                </p>
                <div>
                    <TextInput
                        placeholder="Your Email"
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <TextInput
                        placeholder="Your Password"
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 block">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Forgot your password?
                        </Link>
                    )}
                </div>
                <div className="mt-4 block">
                    <button
                        type="submit"
                        disabled={processing}
                        className="text-base px-10 py-2 bg-accent text-customMint font-bold shadow-md rounded-md hover:text-lg"
                    >
                        Log in
                    </button>
                </div>
            </form>
            <div className="w-1/2 bg-accent rounded-bl-[100px] rounded-tl-[100px] flex justify-center items-center">
                <div className="text-white text-center">
                    <h1 className="font-bold text-2xl mb-3">Hello, Friend</h1>
                    <p className="text-xs mb-10">
                        Register with your personal details to use of all site
                        features
                    </p>
                    <Link
                        href="/register"
                        className="text-sm px-4 py-2 bg-customMint text-accent shadow-md rounded-md hover:text-base "
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </GuestLayout>
    );
}
