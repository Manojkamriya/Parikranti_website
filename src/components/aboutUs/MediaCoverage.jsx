import React from 'react'

export default function MediaCoverage() {
  return (
    <>     <h1 id="heading">Media Coverage</h1> 
     <div class="gallery">
        <div className="image-container tall">
            <img className="media-image" src="./Images/news-8.jpeg" alt="media"/>
        </div>
        <div  className="image-container">
            <img className="media-image" src="./Images/news-2.jpg" alt="media"/>
        </div>
        <div className="image-container tall">
            <img className="media-image" src="./Images/news-3.jpg" alt="media"/>
        </div>
        <div className="image-container tall">
            <img className="media-image" src="./Images/news-9.jpg" alt="media"/>
        </div>
        <div className="image-container">
            <img className="media-image" src="./Images/news-4.jpg" alt="media"/>
        </div>
       
        <div className="image-container">
            <img className="media-image" src="./Images/news-5.jpg" alt="media"/>
        </div>
        <div className="image-container">
            <img className="media-image" src="./Images/news-1.jpg" alt="media"/>
        </div>
       
    </div>
    </>

  )
}
