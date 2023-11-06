import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { reviews } from "../constants";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CustomerReviews = () => {
  return (
    <div>
      <div className="text-center w-full md:w-1/2 mx-auto">
        <h2 className="sectionHeader">
          What Our <span className="text-coral-red">Customers</span> Says
        </h2>
        <p className="my-3 text-gray-700 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
          adipisci odit repellat id quidem cumque aliquid inventore illum
          cupiditate temporibus.
        </p>
      </div>
      <div className="flex  items-center justify-between flex-col md:flex-row my-8 ">
        {reviews.map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.imgURL}
              alt=""
              width={100}
              height={100}
              className="mx-auto rounded-full"
            />
            <p className="text-gray-700 text-sm my-3">{item.feedback}</p>
            <span className="text-gray-400 text-sm">
              {item.rating}{" "}
              <FontAwesomeIcon
                icon={faStar}
                className="text-coral-red"
              ></FontAwesomeIcon>
            </span>
            <span className="font-bold block my-1">{item.customerName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CustomerReviews;
