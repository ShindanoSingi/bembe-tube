import React from "react"

function PlayingVideoInfo({videoObject, viewsFunc, getaddToPlaylist}) {
     // console.log(videoObject)

     // getaddToPlaylist(videoObject.id)
     return(videoObject.type === "video" && (
          <div class="row gx-5">
               <div class="col-md-6 mb-4">
                    <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                         {
                         videoObject.title.charAt(0)
                    }
                         {
                         videoObject.title.substring(1)
                    }</span>
                    <h4>
                         <strong>Facilis consequatur eligendi</strong>
                    </h4>
                    <p class="text-muted">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
                                                        eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
                                                        sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
                    </p>
                    <button type="button" class="btn btn-primary">Read more</button>
               </div>
          </div>


     ))
}

export default PlayingVideoInfo
