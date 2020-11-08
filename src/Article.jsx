import React, {useState} from 'react';
import Likebutton from "./Likebutton";

const Article = (props) => {
  const [isPublished, togglePublished] = useState(false);

  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態:</label>
      <input type="checkbox" checked={isPublished} id-="check" onClick={() => togglePublished(!isPublished)}/>
      <Likebutton />
      {/* <p>順番は{props.order}</p>
      <p>著者:{props.author}</p>
      <p>{publishState}</p> */}
    </div>
  )
};

export default Article