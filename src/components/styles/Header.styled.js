import styled from "@emotion/styled";

export const HeaderDiv = styled.div`
  width: 100%;
  background-color: #000;
  --color: #fff;

  .p-cont {
    width: auto;
    max-width: 1600px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;

    p {
      color: var(--color);

      padding: 10px;

      svg {
        fill: var(--color);
        width: 14px;
        margin-right: 8px;
      }
    }
  }
`;
