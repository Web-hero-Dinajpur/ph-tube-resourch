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
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
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