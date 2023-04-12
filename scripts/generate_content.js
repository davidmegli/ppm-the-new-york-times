
function generateContent() {
    numberOfArticles = 10;
    const main_content = document.getElementById("main-content");

    main_content.innerHTML = "";
    const left_section = document.createElement("section");
    left_section.classList.add("left-content-section","col-12","col-sm-12","col-md-9","row");
    main_content.appendChild(left_section);

    const right_section = document.createElement("section");
    right_section.classList.add("right-content-section","col-12","col-sm-12","col-md-3","column","pt-2","px-0","mr-0");
    main_content.appendChild(right_section);

    //genero gli articoli di sinistra (principali)
    for (let i = 0; i < numberOfArticles; i++) {
        //creo una sezione per ogni elemento
        const article_section = document.createElement("section");
        article_section.classList.add("article-section","row");
        left_section.appendChild(article_section);

        //creo un div per contenere l'immagine
        const article_div = document.createElement("div");
        article_div.classList.add("article-div","d-inline","col-5","column");
        article_section.appendChild(article_div);

        numberOfArticlesPerSection = 2;

        for(let j = 0; j < numberOfArticlesPerSection; j++) {

            let article = new Article();

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
        img.setAttribute("src","https://picsum.photos/520/348?random="+i);
        img_div.appendChild(img);
        const author = document.createElement("p");
        author.classList.add("article-author");
        author.innerHTML = "David Megli";
        img_div.appendChild(author);
    }

    //genero gli articoli di destra + opinioni
    const right_articles_div = document.createElement("div");
    right_articles_div.classList.add("right-articles-div","col-12","row","m-0","p-0");
    right_section.appendChild(right_articles_div);

    let article = new Article();
    const article_right_1_div = document.createElement("div");
    article_right_1_div.classList.add("article-right-1","col-12","row","m-0","p-0");
    right_articles_div.appendChild(article_right_1_div);
    const article_right_1_img = document.createElement("img","m-0","p-0");
    article_right_1_img.classList.add("article-right-1-img","col-12","row-6","m-0","p-0");
    article_right_1_img.setAttribute("src","https://picsum.photos/520/348?random="+Math.floor(Math.random() * 100));
    article_right_1_div.appendChild(article_right_1_img);
    const article_right_1_author = document.createElement("p");
    article_right_1_author.classList.add("article-author","text-uppercase");
    article_right_1_author.innerHTML = "David Megli";
    article_right_1_div.appendChild(article_right_1_author);
    const article_right_1_title = document.createElement("h3");
    article_right_1_title.classList.add("article-right-title");
    article_right_1_title.innerHTML = article["title"];
    article_right_1_div.appendChild(article_right_1_title);
    const article_right_1_text = document.createElement("p");
    article_right_1_text.classList.add("article-right-text");
    article_right_1_text.innerHTML = article["text"];
    article_right_1_div.appendChild(article_right_1_text);
    const article_right_1_timeToRead = document.createElement("p");
    article_right_1_timeToRead.classList.add("article-right-1-time-to-read","text-uppercase");
    article_right_1_timeToRead.innerHTML = article["minutes"] + " min read";
    article_right_1_div.appendChild(article_right_1_timeToRead);

    const article_right_2_3_container_div = document.createElement("div");
    article_right_2_3_container_div.classList.add("article-right-2-3-container","col-12","row","m-0","p-0");
    right_articles_div.appendChild(article_right_2_3_container_div);

    const article_right_2_div = document.createElement("div");
    article_right_2_div.classList.add("article-right-2","col-12","row","m-0","p-0");
    article_right_2_3_container_div.appendChild(article_right_2_div);

    const article_right_3_div = document.createElement("div");
    article_right_3_div.classList.add("article-right-3","col-12","row","m-0","p-0");
    article_right_2_3_container_div.appendChild(article_right_3_div);
}

function Article() {
    this.title = "Lorem ipsum dolor sit amet";
    this.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget";
    this.minutes = Math.floor(Math.random() * 6) + 1;
}

document.addEventListener("DOMContentLoaded", generateContent)