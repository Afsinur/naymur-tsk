import styled from "@emotion/styled";

export const HeroSectionDiv = styled.div`
  position: relative;

  width: 100%;
  min-height: 900px;
  padding: 10px;

  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));

  video {
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;

    object-fit: cover;

    z-index: -1;
  }

  .container {
    width: auto;
    max-width: 1600px;
    margin: 0 auto;
  }
`;

export const HeroNavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 0;

  ul {
    display: flex;
    list-style: none;

    li {
      cursor: pointer;
      color: #fff;

      margin-left: 44px;

      display: flex;
      align-items: center;

      &.last-li {
        border: 1px solid #fff;
        padding: 12px;
        border-radius: 13px;

        .fst-spn {
          position: relative;

          &::before {
            content: "0";

            position: absolute;
            top: 0;
            right: 0;
            transform: translate(20%, -80%);

            height: 16px;
            width: 16px;
            padding: 2px;

            font-size: 8px;
            border-radius: 50%;

            display: flex;
            align-items: center;
            justify-content: center;

            background-color: #f00;
          }
        }

        .last-spn {
          display: grid;
          grid-template-columns: repeat(1, 12fr);
          margin-left: 10px;

          .tp-spn {
            font-size: 12px;
          }
        }
      }

      svg {
        width: 24px;
      }
    }
  }
`;

export const HeroContentDiv = styled.div`
  margin-top: 56px;

  .top {
    font-size: 18px;
    font-weight: 400;
    text-transform: capitalize;
    letter-spacing: 4.37px;
    color: #ffffff;
    margin-bottom: 12px;
  }

  h1 {
    font-size: 55px;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 1.1em;
    color: #ffffff;
  }

  hr {
    height: 2px;
    width: 57px;
    margin: 30px 0px 50px 0px;
    background-color: #e30301;
    border: none;
  }

  p {
    color: #ffffff;
    font-size: 20px;
    font-weight: 400;

    margin-bottom: 80px;
  }

  button {
    background-color: transparent;
    background-image: linear-gradient(90deg, #4d0105 0%, #e70906 100%);

    box-shadow: 0px 0px 14px 0px
      rgba(255, 20.54782608695651, 10.99999999999999, 0.45098039215686275);
    border-radius: 26px 26px 26px 26px;

    color: #ffffff;
    cursor: pointer;

    padding: 20px 40px;

    border: none;
  }
`;
