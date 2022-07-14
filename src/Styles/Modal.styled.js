import styled from "styled-components";

export const MainBtn = styled.div`
  display: flex;
  justify-content: center;
`;
export const ConfirmBtn = styled.button`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.004em;
  background-color: #352c9a;
  color: white;
  width: 145px;
  height: 43px;
  border-style: none;
  align-items: center;
  transition: all 0.4s ease 0s;

  &:hover {
    background-color: #9747ff;
  }
`;

export const ModelMainContainer = styled.div`
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModelContainer = styled.div`
  width: 600px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  z-index: 2;
`;
export const TitleCloseBtn = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
export const Seats = styled.h3`
  color: black;
`;
export const TitleCloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;
export const HeaderConfirm = styled.h1`
  align-items: center;
  margin-left: 200px;
`;
export const MainCountSeat = styled.div`
  margin-right: 100px;
  line-height: 10px;
`;
export const NumberOfSeats = styled.p`
  display: flex;
  justify-content: space-between;
`;
export const CardSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardImg = styled.div`
  .setSizeImg {
    width: 200px;
  }
`;
export const MainDivision = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DivisionPart = styled.p`
  color: grey;
`;
export const MainDivisionLast = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  margin-top: 10px;
  color: black;
`;
export const DivisionPartLast = styled.p`
  color: black;
  font-weight: bold;
`;
