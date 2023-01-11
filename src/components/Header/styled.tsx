import styled from "styled-components";
export const Container = styled.div`
  background-image: url("https://i.postimg.cc/XqgBmKMp/background.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  border-bottom: 2px solid #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  height: 40%;
`;

export const ItensContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .titulo {
    font-size: 2.5rem;
    color: #eee;
    font-style: italic;
    font-weight: bold;
    @media (max-width: 400px) {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }
  .texto {
    color: #7bff6f;
    margin-top: 1rem;
    font-weight: bold;
    font-style: italic;

    @media (max-width: 400px) {
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }
  }

  .button {
    appearance: button;
    background-color: #00da53;
    background-image: none;
    border: 1px solid #00da53;
    border-radius: 4px;
    box-shadow: #145426 4px 4px 0 0, #000 4px 4px 0 1px;
    box-sizing: border-box;
    color: #362e2e;
    cursor: pointer;
    display: inline-block;
    font-family: ITCAvantGardeStd-Bk, Arial, sans-serif;
    font-size: 1rem;
    font-weight: bold;
    line-height: 20px;
    margin: 0 5px 10px 0;
    overflow: visible;
    padding: 18px 100px;
    text-align: center;
    text-transform: none;
    touch-action: manipulation;
    user-select: none;

    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;

    &:focus {
      text-decoration: none;
    }

    &:hover {
      text-decoration: none;
    }

    &:active {
      box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
      outline: 0;
    }

    &:not([disabled]):active {
      box-shadow: #145426 2px 2px 0 0, #000 2px 2px 0 1px;
      transform: translate(2px, 2px);
    }

    @media (max-width: 400px) {
      padding: 12px 50px;
    }
  }
`;
