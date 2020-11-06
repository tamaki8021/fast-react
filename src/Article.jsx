import React from 'react';
import Likebutton from "./Likebutton";

const Article = (props) => {
  // let publishState = "";
  // if(props.isPublished) {
  //   publishState = "公開"
  // } else {
  //   publishState = "非公開"
  // }

  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態:</label>
      <input type="checkbox" checked={props.isPublished} id-="check" onClick={() => props.toggle()}/>
      <Likebutton count={props.count}/>
      {/* <p>順番は{props.order}</p>
      <p>著者:{props.author}</p>
      <p>{publishState}</p> */}
    </div>
  )
};

export default Article