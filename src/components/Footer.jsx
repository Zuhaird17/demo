import FacebookIcon from "../assets/Facebook.svg";  
import LinkedInIcon from "../assets/Linkedin.svg";
import InstagramIcon from "../assets/Instagram.svg";
import LogoIcon from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F3] py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="space-y-8">
          {/* Menu */}
          <div>
            <h4 className="text-[#262626] text-lg font-semibold">Menu</h4>
            <ul className="mt-4 space-y-2 text-[#6D6D6D]">
              <li><a href="#" className="text-sm hover:text-black">Home</a></li>
              <li><a href="#" className="text-sm hover:text-black">Shop</a></li>
              <li><a href="#" className="text-sm hover:text-black">About</a></li>
              <li><a href="#" className="text-sm hover:text-black">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-black">Contact</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <img src={FacebookIcon} alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={InstagramIcon} alt="Instagram" className="w-5 h-5" />
            </a>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[#262626] text-lg font-semibold">Shop</h4>
            <ul className="mt-4 space-y-2 text-[#6D6D6D]">
              <li><a href="#" className="text-sm hover:text-black">Category 1</a></li>
              <li><a href="#" className="text-sm hover:text-black">Category 2</a></li>
              <li><a href="#" className="text-sm hover:text-black">Category 3</a></li>
              <li><a href="#" className="text-sm hover:text-black">Category 4</a></li>
              <li><a href="#" className="text-sm hover:text-black">Category 5</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[#262626] text-lg font-semibold">Help</h4>
            <ul className="mt-4 space-y-2 text-[#6D6D6D]">
              <li><a href="#" className="text-sm hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-black">Terms & Conditions</a></li>
              <li><a href="#" className="text-sm hover:text-black">Special E-Shop</a></li>
              <li><a href="#" className="text-sm hover:text-black">Shipping</a></li>
              <li><a href="#" className="text-sm hover:text-black">Secure Payments</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#262626] text-lg font-semibold">Contact</h4>
            <ul className="mt-4 space-y-2 text-[#6D6D6D]">
              <li>(052) 611-5711</li>
              <li>company@domain.com</li>
            </ul>
          </div>

          {/* Logo + Bottom Text */}
          <div className="flex flex-col items-start">
            <img
              src={LogoIcon}
              alt="Company Logo"
              className="w-32 h-auto mb-4"
            />
            <p className="text-[#6D6D6D] text-xs">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
