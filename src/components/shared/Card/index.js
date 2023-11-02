import React from "react";
import "./cardStyle.css";
import cardImageWhite from "../../../assets/icons/FrameWhite.png";
import cardImage from "../../../assets/icons/Frame.png";
import invertedCommas from "../../../assets/icons/Vector.png";

function Card({ content, name, active = false, date }) {
  return (
    <div className={active ? `active_card_body` : `card_body`}>
      <img src={invertedCommas} alt="card image" className="invertedCommas" />
      <p className={active ? `active_card_content` : `card_content`}>
        {content}
      </p>
      <img src={invertedCommas} alt="card image" className="invertedCommas2" />
      <div className="card_action_box">
        <img
          src={active ? cardImage : cardImageWhite}
          alt="card image"
          className={active ? `active_cardImage` : `cardImage`}
        />
        <div className="card_detail">
          <p className={active ? `active_card_name` : `card_name`}>{name}</p>
          <p className={active ? `active_card_date` : `card_date`}>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
