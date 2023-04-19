import { HeroNavDiv } from "../styles/HeroSection.styled";
import { IconSearch, IconShoppingBag } from "./Icons";

const HeroNav = () => {
  return (
    <HeroNavDiv>
      <a href="#">
        <img src="/img/hero-nav-logo.png" alt="img" />
      </a>

      <ul>
        <li>Home</li>

        <li>Products</li>

        <li>Services</li>

        <li>About</li>

        <li>Contact</li>

        <li>
          <IconSearch />
        </li>

        <li className="last-li">
          <span className="fst-spn">
            <IconShoppingBag />
          </span>

          <span className="last-spn">
            <span className="tp-spn">Shopping Basket</span>
            <span>$0.00</span>
          </span>
        </li>
      </ul>
    </HeroNavDiv>
  );
};

export default HeroNav;
