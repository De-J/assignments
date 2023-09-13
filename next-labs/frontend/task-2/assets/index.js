let i = 0;
const callback = async () => {
    const res = await fetch(`https://dummyjson.com/products?skip=${i*10}&limit=10`)
        .then(res => res.json());
    
    let posts = document.getElementById("posts");
    res.products.forEach(item => {
        let div = document.createElement("div"),
        h1 = document.createElement("h1"),
        p = document.createElement("p");

        div.classList.add("card");

        div.appendChild(h1);
        h1.innerHTML = item.title;
        div.appendChild(p);
        p.innerHTML = item.description;

        posts.appendChild(div);
    });
    // console.log(res);
    (i === 10) ? i = 0 : i++;
}

const observer = new IntersectionObserver(callback, { threshold: 1.0 });
observer.observe(end);