const loaddarafunction = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => loaddisplay(data.categories))
        .catch(error => console.log(error));
}

const loadvideo = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => loaddisplayvideo(data.videos))
        .catch(error => console.log(error));
}

const loadCategotiyVideo = (id) =>{
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => loaddisplayvideo(data.category))
    .catch(error => console.log(error));
}


const loaddisplayvideo = (videos) => {
    const videocontainer = document.getElementById('cardcontainer');
    videocontainer.innerHTML = "";

    if(videos.length == 0){
        videocontainer.innerHTML=
        `
        <div class='text-3xl'>
            No containt here in this category
        </div>
        `
    }

    videos.forEach(video => {
        console.log(video);
        const card = document.createElement('div')
        card.classList = 'card card-compact bg-base-100 w-96 shadow-xl'
        card.innerHTML = `
      <figure class="h-[200px]">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="py-2 px-0 flex gap-2">
  <div>
        <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
  </div> 
  <div>
        <h2 class="text-bold">${video.title}</h2>
        <div class="py-2 px-0 flex items-center gap-2">
            <div>${video.video_id}</div>
            <img class="w-5 h-5 rounded-full object-cover" src="https://img.icons8.com/?size=48&id=63760&format=png"/>
        </div>
  </div>
    
  </div>
    `;
        videocontainer.append(card)
    })

}

const loaddisplay = (categories) => {
    const categoricontainer = document.getElementById('categories');
    categories.forEach(item => {
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
   <button onclick='loadCategotiyVideo(${item.category_id})' class='btn'>
   ${item.category}
   </button>
   `;

        categoricontainer.append(buttonContainer);
    });
}
loaddarafunction();
loadvideo();