//@ts-ignore
import landingBackgroundImage from "../assets/landingBackground1.jpg";
import ActionCard from "./ActionCard";
import { BiWorld, BiPaperPlane, BiBookmarkHeart } from "react-icons/bi";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[60vh]">
      <div className="absolute inset-0 p-8 z-0">
        <img
          src={landingBackgroundImage}
          alt="Wanderlust background"
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h2 className="absolute top-15 text-4xl font-bold text-white drop-shadow-lg text-center">
          Let's Start An Adventure...
        </h2>
        <div className="flex flex-row justify-evenly items-center w-full mt-14 ">
          <ActionCard
            title="Discover Places"
            description="Don't have a destination in mind for your trip? Start here to discover places and find inspiration."
            buttonLabel="Start Exploring"
            Icon={BiWorld}
            linkDestination="discoverPlacesPage"
          />

          <ActionCard
            title="Plan a Trip"
            description="Plan your ideal journey by creating a trip itinerary."
            buttonLabel="Start Planning"
            Icon={BiPaperPlane}
            linkDestination="planTripPage"
          />

          <ActionCard
            title="My Trips"
            description="Check out your saved trips."
            buttonLabel="View Trips"
            Icon={BiBookmarkHeart}
            linkDestination="myTripsPage"
          />
        </div>
      </div>
    </div>
  );
}
