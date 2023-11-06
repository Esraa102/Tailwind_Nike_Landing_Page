import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { specialOfferImages } from "../constants";
import {
  faChevronCircleRight,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
const SpecialOffers = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row items-center">
      <div className="images w-full flex flex-col items-center justify-center md:items-start md:justify-start">
        <div className="flex gap-3 flex-wrap my-3 items-center justify-center">
          <img
            src={specialOfferImages[0]}
            alt=""
            width={180}
            height={200}
            className="rounded-md"
          />
          <img
            src={specialOfferImages[1]}
            alt=""
            width={180}
            height={200}
            className="rounded-md"
          />
        </div>
        <img
          src={specialOfferImages[2]}
          width={372}
          height={150}
          alt=""
          className="rounded-md"
        />
      </div>
      <div className="w-full md:w-[70%]">
        <h2 className="sectionHeader">
          Special <span className="text-coral-red">Offers</span>
        </h2>
        <p className="my-3 text-gray-700 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
          voluptatibus mollitia rem voluptas voluptatem sapiente placeat ipsa
          sequi, tempora sed illum ipsum est illo, nam alias vel! Hic, itaque
          adipisci!
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="main-btn shadow-xl">
            Shop Now <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
          <button className="main-btn bg-pale-blue border shadow-xl text-black">
            Learn More{" "}
            <FontAwesomeIcon icon={faChevronCircleRight}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};
export default SpecialOffers;
