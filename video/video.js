const loaddarafunction = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => loaddisplay(data.categories))
    .catch(error => console.log(error));
}

const loadvideo = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => loaddisplayvideo(data.videos))
    .catch(error => console.log(error));
}
const loaddisplayvideo = (videos) =>{
    const videocontainer = document.getElementById('cardcontainer')
    videos.forEach(video => {
        console.log(video);
    const card = document.createElement('div')
    card.classList ='card card-compact bg-base-100 w-96 shadow-xl'
    card.innerHTML=`
      <figure>
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="py-2 px-0 flex gap-2">
  <div>
        <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
  </div>
    
  </div>
    `;
    videocontainer.append(card)
    })
    
}

const loaddisplay = (datas)=>{
    const categoricontainer = document.getElementById('categories');

    datas.forEach(items => {
        // console.log(items);
    const button = document.createElement('button');
    button.classList ='btn';
    button.innerText = items.category;

    categoricontainer.append(button);
    });
}
loaddarafunction();
loadvideo();