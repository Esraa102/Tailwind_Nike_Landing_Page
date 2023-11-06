import { services } from "../constants";

const Services = () => {
  return (
    <div className="flex gap-3 flex-col md:flex-row">
      {services.map((item, index) => (
        <div key={index} className="p-3 shadow-xl rounded-md text-center">
          <img
            src={item.imgURL}
            alt=""
            className="bg-coral-red p-2  rounded-full mb-3 mx-auto"
          />
          <span className="font-semibold">{item.label}</span>
          <p className="text-gray-700 text-sm mt-3">{item.subtext}</p>
        </div>
      ))}
    </div>
  );
};
export default Services;
