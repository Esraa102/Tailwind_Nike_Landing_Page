import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";
const Navbar = () => {
  const showMenue = () => {
    if(document.getElementById('nav-ul').classList.contains('mobileNav')) {
      document.querySelector("#nav-ul").classList.toggle("show");
    }
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      document.querySelector("header").classList.add("backdrop-blur-sm");
    } else {
      document.querySelector("header").classList.remove("backdrop-blur-sm");
    }
  });
  return (
    <header
      className=" fixed top-0 left-0
    z-10 w-full  	"
    >
      <nav className="flex justify-between max-container py-4 padding-x mx-auto items-center">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul id="nav-ul" className="mobileNav  md:largeScreenNav">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="font-montserrat leading-normal lg:text-lg  text-slate-gray first:text-coral-red"
            >
              <a href={link.href} className="hover:text-coral-red">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <img
          className="block md:hidden cursor-pointer"
          src={hamburger}
          width={25}
          height={25}
          onClick={showMenue}
        />
      </nav>
    </header>
  );
};
export default Navbar;
