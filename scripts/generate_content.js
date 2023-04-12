
function generateContent() {
    numberOfItems = 10;
    const main_content = document.getElementById("main-content");

    main_content.innerHTML = "";
    const left_section = document.createElement("section");
    left_section.classList.add("left-content-section","col-12","col-sm-12","col-md-9","row");
    main_content.appendChild(left_section);

    const right_section = document.createElement("section");
    right_section.classList.add("right-content-section","col-12","col-sm-12","col-md-3","row");
    main_content.appendChild(right_section);

    //da cancellare:

    for (let i = 0; i < numberOfItems; i++) {
        //creo una sezione per ogni elemento
        const article_section = document.createElement("section");
        article_section.classList.add("article-section","row");
        left_section.appendChild(article_section);

        //creo un div per contenere l'immagine
        const article_div = document.createElement("div");
        article_div.classList.add("article-div","d-inline","col-5","column");
        article_section.appendChild(article_div);

        numberOfArticlesPerSection = 2;
        let article = new Article();

        for(let j = 0; j < numberOfArticlesPerSection; j++) {
            const single_article_div = document.createElement("div");
            single_article_div.classList.add("single-article-div", "col-12", "row-6");
            if(j<numberOfArticlesPerSection-1) {
                single_article_div.classList.add("pb-3","border-bottom");
            }
            if(j>=1) {
                single_article_div.classList.add("pt-3");
            }
            article_div.appendChild(single_article_div);


            const title = document.createElement("h3");
            title.classList.add("article-title");
            title.innerHTML = article["title"];
            single_article_div.appendChild(title);

            const text = document.createElement("p");
            text.classList.add("article-text");
            text.innerHTML = article["text"];
            single_article_div.appendChild(text);

            const timeToRead = document.createElement("p");
            timeToRead.classList.add("article-time-to-read","text-uppercase");

            timeToRead.innerHTML = article["minutes"] + " min read";
            single_article_div.appendChild(timeToRead);
        }



        //creo un'immagine
        const img_div = document.createElement("div");
        img_div.classList.add("img-div","d-inline","col-7");
        article_section.appendChild(img_div);
        const img = document.createElement("img");
        img.classList.add("article-img");
        img.setAttribute("src","https://picsum.photos/450/300?random="+i);
        img_div.appendChild(img);
        const author = document.createElement("p");
        author.classList.add("article-author");
        author.innerHTML = "David Megli";
        img_div.appendChild(author);




    }
}

function Article() {
    this.title = "Lorem ipsum dolor sit amet";
    this.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget";
    this.minutes = Math.floor(Math.random() * 6) + 1;
}

document.addEventListener("DOMContentLoaded", generateContent)