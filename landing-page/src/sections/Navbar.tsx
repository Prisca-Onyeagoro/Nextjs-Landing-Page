import Image from "next/image";
import Logo from "@/assets/images/logo.svg";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="grid grid-cols-2 border border-white/15 rounded-full p-2 px-4 items-center">
                    <div>
                        <Image src={Logo} alt="logo" className="h-9 w-auto " />
                    </div>
                    <div className="flex justify-end">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-menu md:hidden"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                        <button className="border border-white h-12 rounded-full px-6 font-medium">
                            Log In
                        </button>
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
