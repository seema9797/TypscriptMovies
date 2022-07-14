import styled from "styled-components";


export const HeaderMovie = styled.h1`
  font-size: 48px;
  line-height: 63px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const DisplayImages = styled.div`
  width: 80%;
  margin: 50px 170px auto;
  justify-content:center;
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(355px, 1fr));
  grid-gap: 60px;
`;

export const SubMainCard = styled.img`
  background-position: center;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  width: 90%;
  height: 375px;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.25);
`;
export const SubContain = styled.div`
justify-content: 'center';
align-items: 'center'
 `
export const ButtonShowMore = styled.button`
  position: absolute;
  margin: 270px -100px 100px;

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
  z-index: 1;
`;
export const MovieTitle = styled.h3`
  position: absolute;
  font-size: 24px;
  line-height: 28px;
  width: 300px;
  letter-spacing: 0.004em;
  color: #fff;
  z-index: 2;
  align-items: center;
  color: black;
  margin: 130px 50px 100px;
`;