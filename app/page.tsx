import Content from "@/components/content/content";
import ImagesSlideshow from "@/components/images-slideshow/images-slideshow";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <header className="flex flex-col-reverse sm:flex-row items-center justify-center gap-10">
                <ImagesSlideshow />
                <div className="flex flex-col gap-7 items-end">
                    <h1 className="text-right uppercase bg-gradient-to-r from-secundary-strong to-secundary-base bg-clip-text text-transparent">
                        NextLevel Food for
                        <br />
                        NextLevel Foodies
                    </h1>
                    <p className="font-thin">
                        Taste & share food from all over the world.
                    </p>
                    <div className="flex items-center justify-between gap-1">
                        <Link
                            href="/community"
                            className="text-secundary-strong"
                        >
                            Join the Community
                        </Link>
                        <Link
                            href="/meals"
                            className="font-bold px-4 p-2 bg-gradient-to-r from-secundary-strong to-secundary-base rounded-lg"
                        >
                            Explore Meals
                        </Link>
                    </div>
                </div>
            </header>
            <main className="flex flex-col gap-5">
                <Content
                    title="How it works"
                    content="NextLevel Food is a platform for foodies to share their favorite recipes with the world.
						It's a place to discover new dishes, and to connect with other food lovers. NextLevel Food is a place to discover new dishes, and to connect with other food lovers."
                />
                <Content
                    title="Why NextLevel Food?"
                    content="NextLevel Food is a platform for foodies to share their favorite recipes with the world.
						It's a place to discover new dishes, and to connect with other food lovers."
                />
            </main>
        </>
    );
}
