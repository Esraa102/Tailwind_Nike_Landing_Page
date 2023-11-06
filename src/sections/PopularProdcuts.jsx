import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { products } from "../constants";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const PopularProdcuts = () => {
  return (
    <div>
      <h2 className="sectionHeader">
        Popular <span className="text-coral-red">Products</span>
        <div className="flex gap-3  flex-col md:flex-row items-center justify-start md:justify-center my-5">
          {products.map((item, index) => (
            <div key={index}>
              <img src={item.imgURL} alt="" />
              <div className="p-2">
                <span className="text-xs text-coral-red flex items-center">
                  4.5 <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </span>
                <span className="text-base block my-2">{item.name}</span>
                <span className="text-sm text-coral-red block">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </h2>
    </div>
  );
};
export default PopularProdcuts;
