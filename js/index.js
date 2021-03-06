// import elements of dom
let section = document.querySelector('main .container section .article');
let btn = document.querySelector('.btn');
console.log(section);

// create function async to fetch a url that return a promise
let getData = async (url) => {
    let response = await fetch(url);
    return await response.json();
}

// function to generate the random image color
let generateRandomColor = () => {
    let colors = ['16a085', '27ae60', '2c3e50', 'f39c12', 'e74c3c', '9b59b6', 'FB6964', '342224', '472E32', 'BDBB99', '77B1A9', '73A857'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
}

(async () => {
    section.innerHTML = 'loading...';

    let posts = await getData("https://jsonplaceholder.typicode.com/posts");
    let max = 5;
    if (posts.length > max) {
        posts = posts.slice(0, max)
    }

    section.innerHTML = "";
    posts.forEach(post => {
        section.innerHTML += `
        <article>
        <div class="image-article">
            <a href="/article.html?id=${post.id}">
                <img src="https://via.placeholder.com/300/${generateRandomColor()}" alt="">
            </a>
        </div>
        <div class="content-article">
            <h2> 
                <a href="/article.html?id=${post.id}">${post.title}</a>
            </h2>
        </div>
    </article>`;
    });
})();


