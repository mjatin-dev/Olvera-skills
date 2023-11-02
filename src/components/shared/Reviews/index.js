import React from "react";
import Card from "../Card";
import "./style.css";
import Slick from "../Carousel";
function Reviews() {
  const reviews = [
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      name: "Aaron Boby",
      active: true,
      date: "2 November 2021",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      name: "Daren Axell",
      active: false,
      date: "29 August 2021",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      name: "Aaron Boby",
      active: true,
      date: "2 November 2021",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      name: "Dion Channing",
      active: false,
      date: "22 August 2021",
    },
  ];
  return (
    <div>
      <Slick>
        {reviews?.length &&
          reviews?.map((review) => (
            <Card
              active={review?.active}
              content={review.content}
              name={review.name}
              date={review.date}
            />
          ))}
      </Slick>
    </div>
  );
}

export default Reviews;
