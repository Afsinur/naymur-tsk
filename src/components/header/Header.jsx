import { HeaderDiv } from "../styles/Header.styled";
import { IconClock, IconMessage, IconPhone } from "./Icons";

const Header = () => {
  return (
    <HeaderDiv>
      <div className="p-cont">
        <p>
          <IconPhone />
          +357 25 818 686
        </p>

        <p>
          <IconClock />
          Working Hours: Mon-Tue & Thu-Fri: 08:00-13:00 & 14:30-18:00, Wed:
          08:00-13:00, Sat-Sun: Closed
        </p>

        <p>
          <IconMessage />
          info@tsiakkas.com
        </p>
      </div>
    </HeaderDiv>
  );
};

export default Header;
