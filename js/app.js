let data = [];
let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
let root = document.getElementById("root");
let nav = document.getElementById("nav");



async function loadCharacters() {
    const responce = await fetch(url);
    const data = await responce.json();
    const {drinks} = data
    console.log(drinks);
    Add(drinks)
}
loadCharacters();

function Add(a) {
    let html = "";
    a.forEach( el => {
        html += `
        <nav class="navbar">
        <div class="nav-center">
            <h1 class="title">The <span>Coctail</span> DB</h1>
            <ul class="d-flex">
                <li class="mx-5"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
        </nav>
        `
        nav.innerHTML = html;
    });
};

function Add(a) {
    let html = "";
    a.forEach(el => {
        html += `
        

        <div key="${el.id}" class="cocktails-center">
        <div class="cocktails">
            <article class="cocktail">
                <div class="img-container">
                    <img src="${el.strDrinkThumb}" alt={el.strDrinkThumb} />
                </div>
                <div class="cocktail-footer">
                    <h3>${el.strDrink}</h3>
                    <h4>${el.strGlass}</h4>
                    <p>${el.strAlcoholic}</p>
                    <a class="btn btn-primary btn-details" to="/about/:id"> details </a>
                </div>  
            </article>
        </div>
    </div>
        `
        root.innerHTML = html;
    });
}

