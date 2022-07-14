import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  SeatVector,
  MainSeatDiv,
  SeatContainer,
  UnOrderSeatList,
  MainBtn,
  ConfirmBtn,
} from "../Styles/SeatStyle.styled";
import Defaulted from "../SvgComponents/Defaulted";
import Blue from "../SvgComponents/Blue";
import Disable from "../SvgComponents/Disable";
import SeatLogo from "../images/LogoSeat.png";
import { data } from "./data";
import ModalBoxMovie from "./ModalBoxMovie";
function MovieSeats() {
  const [SeatBook, setSeatBook] = useState(data);
  const [selectedSeatBook, setSelectedSeatBook] = useState<string[]>([]);
  const [DisplayModel, setDisplayModal] = useState(true);
  const location = useLocation<LocationState>();

  interface LocationState {
    location: string;
    movieId: string;
    moviePath: string;
  }
  var storeSeat: string | null;
  if (JSON.stringify(localStorage.getItem(location.state.movieId)) !== "null") {
    storeSeat = localStorage.getItem(location.state.movieId);
  }
  const handleClick = () => {
    setDisplayModal(true);
    storeSeat = String(storeSeat) + selectedSeatBook;
    localStorage.setItem(location.state.movieId, storeSeat);
    storeSeat = localStorage.getItem(location.state.movieId);
  };
  const CloseModel = () => {
    setDisplayModal(false);
  };

  const handleSeatSelections = (seatNo: string) => {
    selectedSeatBook.includes(seatNo)
      ? setSelectedSeatBook((preSelectedSeats) =>
          preSelectedSeats.filter((seat) => seat !== seatNo)
        )
      : setSelectedSeatBook((preSelectedSeats) => [
          ...preSelectedSeats,
          seatNo,
        ]);
  };
  useEffect(() => {
    console.log("seat selected", selectedSeatBook);
  }, [selectedSeatBook]);
  return (
    <div>
      <MainSeatDiv>
        <SeatVector src={SeatLogo} alt="error" />
      </MainSeatDiv>
      <SeatContainer>
        <UnOrderSeatList>
          {SeatBook.map((seat) => {
            return (
              <div key={seat.id} onClick={() => handleSeatSelections(seat.id)}>
                {String(storeSeat).includes(seat.id) ? (
                  <Disable />
                ) : selectedSeatBook.includes(seat.id) ? (
                  <Blue />
                ) : (
                  <Defaulted />
                )}
              </div>
            );
          })}
        </UnOrderSeatList>
      </SeatContainer>
      <MainBtn>
        <ConfirmBtn onClick={handleClick}>Confirm Booking</ConfirmBtn>
      </MainBtn>
      {DisplayModel ? (
        <ModalBoxMovie
          selectedSeatBook={selectedSeatBook}
          pathImg={location.state.moviePath}
          closeModel={CloseModel}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default MovieSeats;
