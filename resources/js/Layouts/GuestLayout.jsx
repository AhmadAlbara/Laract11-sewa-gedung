export default function Guest({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-300 pt-6 sm:justify-center sm:pt-0">
            <div className="mt-6 w-full overflow-hidden h-[500px] bg-white  shadow-lg sm:max-w-3xl sm:rounded-lg flex justify-between  gap-10">
                {children}
            </div>
        </div>
    );
}
