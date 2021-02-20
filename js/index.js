// import elements of dom
let section = document.querySelector('main .container section');
console.log(section);

let getData = async (url) => {
    let response = await fetch(url);
    return await response.json();
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
                <img src="https://via.placeholder.com/300x250?text=300x250+MPU" alt="">
            </a>
        </div>
        <div class="content-article">
            <h2>${post.id}- 
                <a href="/article.html?id=${post.id}">${post.title}</a>
            </h2>
        </div>
    </article>`;
    });

})();