import React from "react";
import {
  Description,
  DetailContainer,
  DetailImg,
  DetailTitle,
  InfoPart,
} from "./Detail.style";
import { useLocation, useParams } from "react-router-dom";
const Detail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  console.log(state);
  console.log(id);
  return (
    <DetailContainer>
      <DetailTitle></DetailTitle>
      <DetailImg></DetailImg>
      <Description></Description>
      <InfoPart></InfoPart>{" "}
    </DetailContainer>
  );
};
export default Detail;
