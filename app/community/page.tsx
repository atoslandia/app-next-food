import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

const CommunityPage = () => {
    return (
        <>
            <header className="flex flex-col text-center gap-5">
                <h1>
                    One shared passion:{" "}
                    <span className="bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent">
                        Food
                    </span>
                </h1>
                <p className="text-lg">
                    Join our community and share your favorite recipes!
                </p>
            </header>
            <main className="text-center">
                <h2>Community Perks</h2>

                <div className="flex flex-col items-center">
                    <Image
                        src={mealIcon}
                        alt="A delicious meal"
                        className="w-32"
                    />
                    <p>Share & discover recipes</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src={communityIcon}
                        alt="A crowd of people, cooking"
                        className="w-32"
                    />
                    <p>Find new friends & like-minded people</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src={eventsIcon}
                        alt="A crowd of people at a cooking event"
                        className="w-32"
                    />
                    <p>Participate in exclusive events</p>
                </div>
            </main>
        </>
    );
};

export default CommunityPage;
