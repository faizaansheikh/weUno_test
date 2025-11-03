import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

import img1 from "../../assets/b1.png";
import img2 from "../../assets/b2.png";
import img3 from "../../assets/box2.png";
import CustomButton from "./CustomButton";
import { useRef } from "react";

function Section5() {
  const sliderRef = useRef(null);

  const arr = [
    { width: "220px", height: "300px", img: img3, title: "Restaurants" },
    { width: "330px", height: "450px", img: img1, title: "Experiences" },
    { width: "220px", height: "300px", img: img2, title: "Events" },
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-auto px-4 md:px-32 lg:px-52 mt-12 md:mt-22">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 overflow-hidden">
       
        <div className="flex flex-col md:mb-12">
          <h1 className="text-[40px] md:text-[45px] pb-8 leading-tight md:pr-12 mt-8 md:mt-0 text-nowrap ml-2 md:ml-0">
            Create your <br /> experience <br /> as you like
          </h1>
          <CustomButton label="Book Tickets" width="200px" icon={true} />
        </div>

        <div className="max-w-[1200px] w-full px-3 md:px-0 my-12 flex items-center justify-center gap-4 overflow-hidden">
          <button
            onClick={scrollLeft}
            className="text-black-700 hover:text-gray-400 transition cursor-pointer "
          >
            <FaCircleChevronLeft size={35} />
          </button>
          <div
            ref={sliderRef}
            className="flex items-center gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {arr.map((x, i) => (
              <div key={i} className="text-center shrink-0">
                <div
                  style={{ width: x.width, height: x.height }}
                  className="min-w-[250px] shrink-0 rounded-3xl overflow-hidden snap-center"
                >
                  <img
                    src={x.img}
                    alt={x.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-center text-2xl my-6">{x.title}</h1>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="text-black-700 hover:text-gray-400 transition cursor-pointer "
          >
            <FaCircleChevronRight size={35} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section5;
