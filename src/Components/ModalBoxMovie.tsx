import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import {
  ModelMainContainer,
  ModelContainer,
  TitleCloseBtn,
  CardSubContainer,
  TitleCloseButton,
  CardImg,
  HeaderConfirm,
  NumberOfSeats,
  MainCountSeat,
  Seats,
  MainDivision,
  DivisionPart,
  MainDivisionLast,
  DivisionPartLast,
} from "../Styles/Modal.styled";

type Props = {
  closeModel?: () => void;
  pathImg?: string;
  selectedSeatBook?: string[];
  IMG_URL?: string;
};
const ModalBoxMovie: React.FC<Props> = ({
  closeModel,
  selectedSeatBook,
  pathImg,
}) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  let total = String(selectedSeatBook).length * 250;
  let SGST = (total * 12) / 100;

  return (
    <ModelMainContainer>
      <ModelContainer>
        <TitleCloseBtn>
          <TitleCloseButton onClick={closeModel}>x</TitleCloseButton>
        </TitleCloseBtn>
        <HeaderConfirm>Confirm book</HeaderConfirm>
        <CardSubContainer>
          <CardImg>
            <img src={IMG_URL + pathImg} alt="error" className="setSizeImg" />
          </CardImg>
          <MainCountSeat>
            <Seats>Seats:</Seats>
            <NumberOfSeats>
              {selectedSeatBook?.map((seatNo: string) => {
                return <h1>{seatNo}</h1>;
              })}{" "}
            </NumberOfSeats>
            <MainDivision>
              <DivisionPart>{selectedSeatBook?.length} * 250:</DivisionPart>
              <DivisionPart>{total}</DivisionPart>
            </MainDivision>
            <MainDivision>
              <DivisionPart>SGST 12% </DivisionPart>
              <DivisionPart>{SGST}</DivisionPart>
            </MainDivision>
            <MainDivision>
              <DivisionPart>CGST 12% </DivisionPart>
              <DivisionPart>{SGST}</DivisionPart>
            </MainDivision>
            <MainDivisionLast>
              <DivisionPartLast>total:</DivisionPartLast>
              <DivisionPartLast> {total + SGST * 2}</DivisionPartLast>
            </MainDivisionLast>
          </MainCountSeat>
        </CardSubContainer>
      </ModelContainer>
    </ModelMainContainer>
  );
};

export default ModalBoxMovie;
