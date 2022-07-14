import styled from "styled-components";

export const MainSeatDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;
export const SeatContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  margin-left: 300px;
  margin-top: 60px;
`;
export const SeatVector = styled.img``;
export const SeatMulti = styled.div`
  display: flex;
  justify-content: center;
`;
export const UnOrderSeatList = styled.li`
  list-style-type: none;
  display: grid;
  list-style: none;
  grid-template-columns: repeat(10, minmax(15px, 1fr));
  grid-gap: 20px;
`;
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
