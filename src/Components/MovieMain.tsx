import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import {
  HeaderMovie,
  DisplayImages,
  SubMainCard,
  ButtonShowMore,
  MovieTitle,
  SubContain,
} from "../Styles/CardMovie.styled";
import {
  ErrorCont,
  ErrorMsg,
  MainErrorDiv,
  ErrorImg,
} from "../Styles/ErrorFound.styled";
import NotFond from "../images/notfound.png";
import { useHistory } from "react-router-dom";
import SearchMovie from './SearchMovie';
//Api
const auth="api_key=16f5a39714623a8f11910f456e72441e"
const BASE_URL="https://api.themoviedb.org/3"
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + auth;

//images search 
const IMG_URL="https://image.tmdb.org/t/p/w500";
const API_SEARCH ="https://api.themoviedb.org/3/search/movie?api_key=16f5a39714623a8f11910f456e72441e&query=";


const MovieMain:React.FC = () => {
    const [getMovies, setMovies] = useState<MoviesItems[]>([])
    const [SearchVal, setSearchVal] = useState<string>("")
    const history = useHistory();
  

    //Interfaces for movies
    interface MoviesItems{
        id : number,
        title: string,
        poster_path:string,
    }
    
useEffect(() => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
      console.log(data.results);
    });
}, []);

const handleSubmit = (e:FormEvent<HTMLFormElement>):void => {
  e.preventDefault();

  if (SearchVal) {
    fetch(API_SEARCH + SearchVal)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  } else {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  }
};
  const Routs = (id:number, path:string) => {
    history.push({
      pathname: "/MovieSeats",
      state: { movieId: id, moviePath: path },
    });
    console.log(path, id);
  };
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };
  return (
    <div>
      <HeaderMovie>Book Tickets</HeaderMovie>
      <SearchMovie
        changeHandler={changeHandler}
        handleSubmit={handleSubmit}
      />
      <DisplayImages>
        {getMovies.length > 0 ? (
          getMovies.map((index) => (
            <div key={index.id}>
              <SubContain>
                <MovieTitle>{index.title}</MovieTitle>
                <ButtonShowMore
                  onClick={() => Routs(index.id, index.poster_path)}
                >
                  See more
                </ButtonShowMore>
              </SubContain>
              <SubMainCard src={IMG_URL + index.poster_path} alt="error" />
            </div>
          ))
        ) : (
          <ErrorCont>
            <MainErrorDiv>
              <ErrorMsg>
                Sorry, there is no result for keyword you searched.
              </ErrorMsg>
              <ErrorImg src={NotFond} alt="error" />
            </MainErrorDiv>
          </ErrorCont>
        )}
      </DisplayImages>
    </div>
  );
}

export default MovieMain