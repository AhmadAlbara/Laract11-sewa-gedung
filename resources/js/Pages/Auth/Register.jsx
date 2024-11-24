import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className="w-1/2 bg-accent rounded-br-[100px] rounded-tr-[100px] flex justify-center items-center">
                <div className="text-white text-center">
                    <h1 className="font-bold text-2xl mb-3">Welcome back</h1>
                    <p className="text-xs mb-10">
                        Register with your personal details to use of all site
                        features
                    </p>
                    <Link
                        href="/login"
                        className="text-sm px-4 py-2 bg-customMint text-accent shadow-md rounded-md hover:text-base "
                    >
                        Sign In
                    </Link>
                </div>
            </div>
            <form onSubmit={submit} className="px-8 py-10 w-1/2 text-center">
                <h1 className="text-2xl font-bold text-secondary mb-2">
                    Create Account
                </h1>
                <p className="text-sm text-customGray mb-8">
                    Register to connect with Us
                </p>
                <div>
                    <TextInput
                        placeholder="Your Name"
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <TextInput
                        placeholder="Your Email"
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <TextInput
                        placeholder="Password"
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <TextInput
                        placeholder="Confirm Password"
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 block">
                    <button
                        type="submit"
                        disabled={processing}
                        className="text-base px-10 py-2 bg-accent text-customMint font-bold shadow-md rounded-md hover:text-lg"
                    >
                        Register
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
