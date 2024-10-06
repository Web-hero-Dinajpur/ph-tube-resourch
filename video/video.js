const loaddarafunction = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => loaddisplay(data.categories))
    .catch(error => console.log(error));
}

const loaddisplay = (datas)=>{
    const categoricontainer = document.getElementById('categories');
    datas.forEach(items => {
        console.log(items);
    const button = document.createElement('button');
    button.classList ='btn';
    button.innerText = items.category;

    categoricontainer.append(button);
    });
}
loaddarafunction();