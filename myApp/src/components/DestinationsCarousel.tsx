import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import DestinationCard from "./DestinationCard";
//@ts-ignore
import landingBackgroundImage from "../assets/landingBackgroundImage.jpg";
//@ts-ignore
import rio from "../assets/rio.jpg";
import { destinationsArray } from "../utils/destinationsArray";

export default () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 4,
        spacing: 25,
      },
    },
    [
      (slider) => {
        let timeout: number | undefined;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 10000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="relative w-[80vw]">
      <div ref={sliderRef} className="keen-slider">
        {destinationsArray.map((destination, index) => (
          <DestinationCard
            key={index}
            image={destination.image}
            title={destination.title}
            country={destination.country}
            flag={destination.flag}
          />
        ))}
      </div>
    </div>
  );
};
