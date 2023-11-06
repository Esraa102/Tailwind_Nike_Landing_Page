import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { quality } from "../constants";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const SuperQuality = () => {
  return (
    <div className="flex gap-6 items-center flex-col md:flex-row">
      <div className="w-full md:w-[70%]">
        <h2 className="sectionHeader my-3">
          We Give You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="text-gray-600 text-sm my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, facilis
          molestias? Voluptatibus odit atque explicabo tempora adipisci cum
          quidem beatae dignissimos, reprehenderit similique inventore et
          nesciunt, ut rem doloribus nisi?
        </p>
        <p className="text-gray-600 text-sm my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, facilis
          molestias? Voluptatibus odit
        </p>
        <button className="main-btn">
          Show More <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
      <img src={quality} alt="" className="rounded-md w-full md:w-[50%]" />
    </div>
  );
};
export default SuperQuality;
