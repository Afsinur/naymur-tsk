import { HeroContentDiv } from "../styles/HeroSection.styled";

const HeroContent = () => {
  return (
    <HeroContentDiv>
      <p className="top">Computers & Office Solutions</p>

      <h1>
        Make Your
        <br />
        Office Smart
      </h1>
      <hr />

      <p>
        In our store you can find photocopiers, faxes, desktops and laptop
        <br />
        computers, tablets, printers, presentation equipment and generally
        <br />
        everything about office equipment.
      </p>

      <button>FIND YOUR COPIER</button>
    </HeroContentDiv>
  );
};

export default HeroContent;
