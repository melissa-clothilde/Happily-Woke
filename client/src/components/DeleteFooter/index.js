import React, { useState } from 'react'
//import { useLocation } from 'react-router-dom';

import API from "../../utils/API";

function DeleteFooter({ article }) {
  const [deleted, setDeleted] = useState(false);
  //let location = useLocation();

  function deleteNews() {
    API.deleteArticle(article._id)
      .then((res) => {
        setDeleted(true)
        window.location.reload();
      }
        )
      .catch((err) => console.log(err));
  }

  return (
  
    <footer class="card-footer">
        {/* <button
          className="card-footer-item button">Mood Check-in</button> */}
        <button className="card-footer-item button" onClick={deleteNews}>Remove</button>
      </footer>
    
  )
}

export default DeleteFooter
