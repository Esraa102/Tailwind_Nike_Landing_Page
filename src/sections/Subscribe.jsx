import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Subscribe = () => {
  const [emailInput, setEmailInput] = useState("");
  let emailReg = /^[a-zA-Z]*\d*(_#$)*@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/;
  const submitForm = (e) => {
    if (emailInput.match(emailReg)) {
      //Submited Successfully :)
    } else {
      e.preventDefault();
    }
  };
  return (
    <div className="flex items-center justify-between   flex-col md:flex-row gap-3">
      <h2 className="sectionHeader w-full md:w-[70%] text-center md:text-start">
        Sign Up For <span className="text-coral-red">Updates</span>
        <br /> & Newsletter
      </h2>
      <form
        action=""
        className=" bg-pale-blue p-3 shadow-xl rounded-md md:rounded-full flex gap-2 w-full flex-col md:flex-row"
        onSubmit={submitForm}
      >
        <input
          className="input bg-transparent"
          type="text"
          placeholder="Enter Your Email"
          onChange={(e) => setEmailInput(e.target.value)}
          value={emailInput}
          required
        />
        <button type="submit" className="main-btn m-0">
          Subscribe <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
        </button>
      </form>
    </div>
  );
};
export default Subscribe;
