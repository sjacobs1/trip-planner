import { IconType } from "react-icons";
import { Link } from "react-router-dom";

type ActionCardProps = {
  title: string;
  description: string;
  buttonLabel: string;
  Icon: IconType;
  linkDestination: string;
  //   onClick: () => void;
};

export default function ActionCard({
  title,
  description,
  buttonLabel,
  Icon,
  linkDestination,
}: //   onClick,
ActionCardProps) {
  return (
    <Link
      to={linkDestination}
      className="relative z-10 group w-full max-w-sm h-[10rem] overflow-hidden rounded-xl shadow-lg backdrop-blur-lg hover:backdrop-blur-3xl bg-neutral/10 hover:bg-neutral/20 transition-all duration-500 hover:h-[18rem] cursor-pointer"
    >
      <div
        className="absolute inset-0 p-4 flex flex-col items-center justify-center
               text-white transition-all duration-500"
      >
        <div className="group-hover:bg-white group-hover:pt-6 group-hover:rounded-tl-xl group-hover:rounded-tr-xl transition-all duration-500 group-hover:translate-y-[-3.5rem] w-full flex items-center border-b-2 border-b-accent flex-row justify-center gap-2">
          <Icon className="group-hover:text-accent mb-2 group-hover:mb-6 w-6 h-6" />
          <h3 className="text-xl font-bold mb-2 group-hover:mb-6 group-hover:text-neutral">
            {title}
          </h3>
        </div>
        <p
          className="text-sm text-center font-medium opacity-0 max-h-0 overflow-hidden transition-all duration-500 
                 group-hover:opacity-100 group-hover:max-h-24"
        >
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button className="btn btn-primary w-full font-bold text-black">
          {buttonLabel}
        </button>
      </div>
    </Link>
  );
}
