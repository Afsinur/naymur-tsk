import { OurServicesDiv } from "../styles/OurServices.styled";
import ServiceContent from "./ServiceContent";
import ServiceTile from "./ServiceTile";

const OurServices = () => {
  return (
    <OurServicesDiv>
      <div className="container">
        <ServiceTile />
        <ServiceContent />
      </div>
    </OurServicesDiv>
  );
};

export default OurServices;
