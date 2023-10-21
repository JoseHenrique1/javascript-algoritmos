import apikey from "./env.js";

let url = "https://newsapi.org/v2/everything?q=tesla&from=2023-09-21&sortBy=publishedAt&apiKey=2a6927b988284b7b8f6466c6bc7f3176"

function setList(news) {
    document.querySelector("#title").innerText = news.articles[0].author;
}

fetch(url)
.then((response)=>response.json())
.then((json)=>{setList(json)})
.catch((error)=>{alert("erro")});
