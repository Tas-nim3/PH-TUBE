function loadVideos(){
 fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
 .then((res)=>res.json())
 .then((data)=>displayVideos(data.videos));



}
//Arrow function:

const displayVideos=(videos)=>{
   const videoContainer =document.getElementById("vdo-container");

   videos.forEach(video => {
    //create elements
  const videoCard = document.createElement("div");

  videoCard.innerHTML=`
  <div class="card bg-base-100 ">
        <figure class="relative">
          <img class="w-full h-[150px] object-cover"
            src="${video.thumbnail}"
            alt="Shoes" />
            <span class="absolute bottom-2 right-2 text-white bg-black px-2 rounded ">3hr 56 min ago</span>
        </figure>
        
        <div class=" flex gap 3 px-0 py-5">
         <div class="profile">
            <div class="avatar">
                <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                  <img src="${video.authors[0].profile_picture}" />
                </div>
              </div>
         </div>
         <div class="intro ml-2">
            <h2 class="text-sm font-semibold">${video.title}</h2>
            <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://image.shutterstock.com/image-vector/blue-verified-social-media-account-260nw-2052354809.jpg">
            </p>
            <p class="text-sm text-gray-400">${video.others.views}
         </div>
          </div>
        </div>
  `;
  //append child
  videoContainer.appendChild(videoCard);

   });

}

loadVideos();