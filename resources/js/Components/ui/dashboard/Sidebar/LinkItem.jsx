import { Link, usePage } from "@inertiajs/react";

const LinkItem = ({ href, icon: Icon, text, badge }) => {
    const { url } = usePage();

    const active = url === href || url.startsWith(`${href}/`) || url.startsWith(`/dashboard/${href}`);
    return (
        <li>
            <Link
                href={href}
                className={`flex items-center p-2  rounded-lg  ${
                    active
                        ? "bg-accent text-white "
                        : "text-primary-light hover:bg-gray-200"
                }`}
            >
                <Icon className="mr-2" />
                <span className="flex-1 me-3">{text}</span>
            </Link>
        </li>
    );
};

export default LinkItem;
