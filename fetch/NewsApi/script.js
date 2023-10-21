import apikey from "./env.js";

let search = "tesla"
let date = "2023-09-21"

let url = `https://newsapi.org/v2/everything?q=${search}&from=${date}&sortBy=publishedAt&apiKey=${apikey}`
let list = document.querySelector("#list");

function RenderNews(news) {
    let k = 0;
    for (k = 0; k<5; k++) {
        let currentNew = news.articles[k];
        let article = elementArticle(currentNew.author, currentNew.title, currentNew.description, currentNew.urlToImage, currentNew.url);
        list.appendChild(article);
    }
}

function elementArticle(author, title, description, urlImage, urlSite){
    let h1 = document.createElement("h1");
    h1.innerText = title;

    let p = document.createElement("p");
    p.innerText = description;
    
    let credits = document.createElement("p");
    credits.innerText = `Por ${author}, acessado em ${urlSite}`;

    let img = document.createElement("img");
    img.setAttribute("src", urlImage);

    let article = document.createElement("article");
    article.appendChild(h1);
    article.appendChild(p);
    article.appendChild(credits);
    article.appendChild(img);
    return article;
}

fetch(url)
.then((response)=>response.json())
.then((json)=>{RenderNews(json)})
.catch((error)=>{alert("erro")});

function searchNews() {
    let child = list.lastElementChild; 
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }


    search = document.querySelector("input").value
    date = "2023-09-21";
    url = `https://newsapi.org/v2/everything?q=${search}&from=${date}&sortBy=publishedAt&apiKey=${apikey}`;
    fetch(url)
    .then((response)=>response.json())
    .then((json)=>{RenderNews(json)})
    .catch((error)=>{alert("erro")});
}

document.querySelector("button").addEventListener("click", searchNews)