import Logo from '../assets/logo.svg';
import Container from './Container';

const Header = () => {
  return (
    <div className="max-w-[1280px] mx-auto w-full relative">
      <Container>
        <header className="bg-white p-6 flex justify-between items-center">
          <div className="logo">
            <img src={Logo} alt="Logo" className="h-4" />
          </div>
          <nav>
            <ul className="flex items-center justify-center space-x-6 text-center">
              {[
                { name: "Home", link: "/" },
                { name: "Shop", link: "/shop" },
                { name: "About", link: "/about" },
                { name: "Contacts", link: "/contacts" },
                { name: "Journal", link: "/journal" }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="px-4 py-2 text-gray-600 transition hover:bg-black/35 rounded-2xl hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </Container>
    </div>
  );
};

export default Header;
