import styled from "@emotion/styled";

export const OurServicesDiv = styled.div`
  width: 100%;

  .container {
    width: auto;
    max-width: 1600px;
    margin: 0 auto;
    padding: 10px;

    .title-cont {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-top: 85px;
      margin-bottom: 55px;

      p {
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 2.16px;
        color: #c8c8c8;
      }

      h1 {
        font-size: 50px;
        font-weight: 600;
        text-transform: capitalize;
        color: #1e1e1e;
        line-height: 130%;
      }

      hr {
        height: 2px;
        width: 36px;
        margin: 30px 0px 50px 0px;
        background-color: #e30301;
        border: none;
      }
    }

    .service-content-cont {
      display: grid;
      grid-template-columns: repeat(1, 12fr);
      gap: 30px;

      .top {
        display: grid;
        grid-template-columns: repeat(2, 6fr);
        gap: 30px;
      }

      .bottom {
        display: grid;
        grid-template-columns: repeat(3, 4fr);
        gap: 20px;
      }

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;

        padding: 20px 20px 40px 20px;
        box-shadow: 0px 0px 30px 0px rgba(221, 205, 205, 0.43);
        border-radius: 50px;

        img {
          width: 160px;
        }

        h2 {
          margin-top: 20px;
          color: #444;
          font-size: 1.5rem;
        }

        p {
          margin-top: 30px;

          color: #7e7e7ec4;
          font-size: 17px;
          font-weight: 400;
        }

        button {
          margin-top: 50px;

          background-color: transparent;
          background-image: linear-gradient(90deg, #4d0105 0%, #e70906 100%);

          box-shadow: 0px 8px 35px 0px
            rgba(237.75, 151.83416115311908, 148.33532608695654, 0.47);
          border-radius: 26px 26px 26px 26px;

          padding: 16px 40px;

          border: none;
          color: #fff;

          font-weight: 500;
        }
      }
    }
  }
`;
