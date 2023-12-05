import "./index.html";
import "./index.css";

const buttonGet = document.querySelector(".btn-get-json");
const posts = document.getElementById("json-info");

async function getPosts() {
    try {
        let response = await fetch("http://localhost:3000/posts");
        let json = await response.json();

        for (var id in json) {
            posts.innerHTML += `<p>${json[id].title} - ${json[id].author}</p>`;
        }
    } catch (error) {
        console.log(error);
    }
}

buttonGet.addEventListener("click", () => {
    console.log("Жмакнули кнопку!!!");
    getPosts();
});
