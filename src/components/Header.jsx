import { HiMoon, HiOutlineMoon } from "react-icons/hi";
import { useCountries } from "../contexts/CountryContext";
import { Link } from "react-router-dom";

function Header() {
  const { darkMode, setDarkMode } = useCountries();

  return (
    <header className="font-nunito flex items-center justify-between bg-white dark:bg-dark_blue text-vd_blue dark:text-white py-8 md:py-6 px-4 sm:px-8 md:px-16 drop-shadow-md fixed top-0 w-full z-50">
      <Link to="/" className="text-md md:text-2xl font-bold">
        Around The Globe
      </Link>
      <div
        className="flex items-center gap-2 md:gap-3 cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <HiMoon /> : <HiOutlineMoon />}
        <p className="text-sm lg:text-base font-medium select-none">
          Dark Mode
        </p>
      </div>
    </header>
  );
}

export default Header;
