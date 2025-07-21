import DestinationsCarousel from "./DestinationsCarousel";

export default function SuggestedPlaces() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <h2 className="p-18 text-2xl font-normal text-neutral-600 text-center">
        Here are some of the most popular destinations among travelers right
        now. Jump in quickly
        <br />
        to discover where others are exploring and add your own adventure to the
        list.
      </h2>
      <div className="w-full flex justify-center p-4">
        <DestinationsCarousel />
      </div>
    </div>
  );
}
