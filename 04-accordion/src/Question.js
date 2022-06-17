import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [readMore, setReadMore] = useState(true);
  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      <p>{readMore ? "" : info}</p>
    </div>
  );
};

export default Question;
