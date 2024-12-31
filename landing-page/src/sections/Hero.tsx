import Button from "@/components/Button";
import DE1 from "@/assets/images/design-example-1.png";
import DE2 from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image src={DE1} alt="profile form image" />
                </div>
                <div className="absolute -right-64 top-3 hidden lg:block">
                    <Image src={DE2} alt="profile form image" />
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Prisca" />
                </div>
                <div className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Aquila" color="red" />
                </div>
                <div className="flex justify-center ">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl lg:text-8xl md:text-7xl font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>
                <div>
                    <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                        Design tools shouldn&apos;t slow you down. Layers
                        combine powerful features with an intuitive interface
                        that keeps you in your creative flow.
                    </p>
                </div>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg md:mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1"
                    />

                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap font-semibold h-10 w-24"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
