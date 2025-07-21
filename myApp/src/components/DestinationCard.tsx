import { Link } from "react-router-dom";

type DestinationCardProps = {
  image: string;
  title: string;
  country?: string;
  flag: string;
  onClick?: () => void;
  buttonLabel?: string;
};

export const DestinationCard = ({
  image,
  title,
  country,
  flag,
}: DestinationCardProps) => {
  return (
    <div className="keen-slider__slide group relative w-[320px] h-[320px] rounded-xl overflow-hidden shadow-md cursor-pointer">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent z-10" />
      <div className="relative z-20 p-4 flex flex-col justify-end h-full text-white">
        <h3 className="text-lg font-bold whitespace-nowrap">
          <img
            src={flag}
            alt={title}
            className="w-11 h-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-1"
          />
          <span>{title}</span>
          {country && (
            <span className="font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {` • ${country}`}
            </span>
          )}
        </h3>
      </div>
    </div>
  );
};

export default DestinationCard;
