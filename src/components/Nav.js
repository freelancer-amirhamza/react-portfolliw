import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquareText, BsClipboardData } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div
          className="w-full h-[96px] bg-black/20 backdrop-blur-xl
                        max-w-[460px] rounded-full mx-auto px-5 flex 
                        justify-between text-2xl text-white/50 items-center"
        >
          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            to="home"
            className="w-[60px] h-[60px] flex items-center justify-center cursor-pointer"
          >
            <BiHomeAlt />
          </Link>
          <Link
            activeClass='active'
            smooth={true}
            spy={true}
           
            to="about"
            className="w-[60px] h-[60px] flex items-center justify-center cursor-pointer"
          >
            <BiUser />
          </Link>
          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to="services"
            className="w-[60px] h-[60px] flex items-center justify-center cursor-pointer"
          >
            <BsClipboardData />
          </Link>
          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to="work"
            className="w-[60px] h-[60px] flex items-center justify-center cursor-pointer"
          >
            <BsBriefcase />
          </Link>
          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to="contact"
            className="w-[60px] h-[60px] flex items-center justify-center cursor-pointer"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
