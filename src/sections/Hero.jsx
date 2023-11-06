import { useEffect } from "react";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";
import { statistics } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  useEffect(() => {
    let thumbnails = document.querySelectorAll(".thumb");
    thumbnails.forEach((img) => {
      img.addEventListener("click", () => {
        thumbnails.forEach((e) => {
          e.classList.remove("border-coral-red");
        });
        document.getElementById("bigShoes").src =
          img.getAttribute("data-image");
        img.classList.add("border-coral-red");
      });
    });
  }, []);
  return (
    <div className="max-container py-4 pt-0 mb-8 padding-x mx-auto  flex-col md:flex-row  bg-white flex gap-5">
      <div className=" md:mt-[90px] mt-16  ">
        <span className="text-coral-red">Our Summer Collections</span>
        <h1 className="font-bold text-4xl p-2 my-3 ">
          The New Arrival
          <br /> <span className="text-coral-red">Nike</span> Shoes
        </h1>
        <p className="text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          fugiat obcaecati labore repellat iusto quae illo.
        </p>
        <button className="main-btn">
          Shop Now{" "}
          <FontAwesomeIcon icon={faChevronCircleRight}></FontAwesomeIcon>
        </button>
        <div className="flex gap-2 flex-wrap w-full">
          {statistics.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-3 items-center w-[30%] p-3 border rounded-md"
            >
              <span className="text-3xl font-bold">{item.value}</span>
              <span className="text-coral-red text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className=" p-2 w-[100%] relative hero">
        <img
          id="bigShoes"
          src={bigShoe1}
          alt=""
          className=" md:mt-[90px] mt-16"
        />
        <div className="md:flex gap-3 absolute bottom-2 hidden ">
          <img
            src={thumbnailShoe1}
            alt=""
            height={100}
            width={100}
            className="thumb rounded-md p-1 bg-primary/75 cursor-pointer border-2 border-coral-red "
            data-image={bigShoe1}
          />

          <img
            src={thumbnailShoe2}
            alt=""
            height={100}
            width={100}
            className="thumb rounded-md p-1 bg-primary/75 cursor-pointer border-2 "
            data-image={bigShoe2}
          />

          <img
            src={thumbnailShoe3}
            alt=""
            width={100}
            height={100}
            className="thumb rounded-md p-1 bg-primary/75 cursor-pointer border-2"
            data-image={bigShoe3}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
