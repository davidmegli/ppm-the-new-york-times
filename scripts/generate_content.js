
function generateContent() {
    numberOfArticles = 10;
    const main_content = document.getElementById("main-content");

    main_content.innerHTML = "";
    const left_section = document.createElement("section");
    left_section.classList.add("left-content-section","col-12","col-sm-12","col-md-9","row","pe-0");
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

            const article_link = document.createElement("a");
            article_link.classList.add("article-link");
            article_link.href = article["link"];
            article_div.appendChild(article_link);

            const single_article_div = document.createElement("div");
            single_article_div.classList.add("single-article-div", "col-12", "row-6");
            if(j<numberOfArticlesPerSection-1) {
                single_article_div.classList.add("pb-3","border-bottom");
            }
            if(j>=1) {
                single_article_div.classList.add("pt-3");
            }
            article_link.appendChild(single_article_div);

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

    //first article on the right
    let article = new Article();
    const article_right_1_link = document.createElement("a");
    article_right_1_link.classList.add("article-right-1-link","col-12","m-0","p-0");
    article_right_1_link.href = article["link"];
    right_articles_div.appendChild(article_right_1_link);
    const article_right_1_div = document.createElement("div");
    article_right_1_div.classList.add("article-right-1","col-12","row","m-0","px-0","pt-0","pb-3","border-bottom");
    article_right_1_link.appendChild(article_right_1_div);
    const article_right_1_img = document.createElement("img","m-0","p-0");
    article_right_1_img.classList.add("article-right-1-img","col-12","row-6","m-0","p-0");
    article_right_1_img.setAttribute("src","https://picsum.photos/520/348?random="+Math.floor(Math.random() * 100));
    article_right_1_div.appendChild(article_right_1_img);
    const article_right_1_author = document.createElement("p");
    article_right_1_author.classList.add("article-author","float-end");
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
    article_right_1_timeToRead.classList.add("article-time-to-read","text-uppercase");
    article_right_1_timeToRead.innerHTML = article["minutes"] + " min read";
    article_right_1_div.appendChild(article_right_1_timeToRead);

    const article_right_2_3_container_div = document.createElement("div");
    article_right_2_3_container_div.classList.add("article-right-2-3-container","col-12","row","m-0","px-0","pt-3","pb-4","border-bottom","border-dark");
    right_articles_div.appendChild(article_right_2_3_container_div);

    article = new Article();
    const article_right_2_link = document.createElement("a");
    article_right_2_link.classList.add("article-right-2-link","col-6","m-0","p-0");
    article_right_2_link.href = article["link"];
    article_right_2_3_container_div.appendChild(article_right_2_link);
    const article_right_2_div = document.createElement("div");
    article_right_2_div.classList.add("article-right-2","col-12","row","m-0","p-0","pe-2","border-end");
    article_right_2_link.appendChild(article_right_2_div);
    const article_right_2_img = document.createElement("img","m-0","p-0");
    article_right_2_img.classList.add("article-right-2-img","col-12","row-6","m-0","p-0");
    article_right_2_img.setAttribute("src","https://picsum.photos/520/348?random="+Math.floor(Math.random() * 100));
    article_right_2_div.appendChild(article_right_2_img);
    const article_right_2_title = document.createElement("h3");
    article_right_2_title.classList.add("article-right-small-title","m-0","px-0","pb-0","pt-2");
    article_right_2_title.innerHTML = article["title"];
    article_right_2_div.appendChild(article_right_2_title);
    const article_right_2_timeToRead = document.createElement("p");
    article_right_2_timeToRead.classList.add("article-time-to-read","text-uppercase");
    article_right_2_timeToRead.innerHTML = article["minutes"] + " min read";
    article_right_2_div.appendChild(article_right_2_timeToRead);

    article = new Article();
    const article_right_3_link = document.createElement("a");
    article_right_3_link.classList.add("article-right-3-link","col-6","m-0","p-0");
    article_right_3_link.href = article["link"];
    article_right_2_3_container_div.appendChild(article_right_3_link);
    const article_right_3_div = document.createElement("div");
    article_right_3_div.classList.add("article-right-3","col-12","row","m-0","p-0","ps-2");
    article_right_3_link.appendChild(article_right_3_div);
    const article_right_3_img = document.createElement("img","m-0","p-0");
    article_right_3_img.classList.add("article-right-3-img","col-12","row-6","m-0","p-0");
    article_right_3_img.setAttribute("src","https://picsum.photos/520/348?random="+Math.floor(Math.random() * 100));
    article_right_3_div.appendChild(article_right_3_img);
    const article_right_3_title = document.createElement("h3");
    article_right_3_title.classList.add("article-right-small-title","m-0","px-0","pb-0","pt-2");
    article_right_3_title.innerHTML = article["title"];
    article_right_3_div.appendChild(article_right_3_title);
    const article_right_3_timeToRead = document.createElement("p");
    article_right_3_timeToRead.classList.add("article-time-to-read","text-uppercase");
    article_right_3_timeToRead.innerHTML = article["minutes"] + " min read";
    article_right_3_div.appendChild(article_right_3_timeToRead);

    const opinion_container_div = document.createElement("div");
    opinion_container_div.classList.add("opinion-container","col-12","column","m-0","px-0","pt-2","pb-4","border-bottom","border-dark");
    right_articles_div.appendChild(opinion_container_div);
    const opinion_section_title = document.createElement("a");
    opinion_section_title.classList.add("opinion-section-title","col-12","row","m-0","p-0","pb-2","float-start");
    opinion_section_title.href = "opinion.html";
    opinion_section_title.innerHTML = "Opinion";
    opinion_container_div.appendChild(opinion_section_title);
    for(let i= 0; i < 8; i++) {

        const opinion = new Opinion();
        const opinion_link = document.createElement("a");
        opinion_link.href = opinion.link;
        opinion_container_div.appendChild(opinion_link);
        const opinion_div = document.createElement("div");
        opinion_link.appendChild(opinion_div);
        const opinion_author = document.createElement("p");
        opinion_author.innerHTML = opinion.author;
        opinion_div.appendChild(opinion_author);
        const opinion_title = document.createElement("h3");
        opinion_title.innerHTML = opinion.title;
        opinion_div.appendChild(opinion_title);
        const opinion_timeToRead = document.createElement("p");
        opinion_timeToRead.innerHTML = opinion.minutes + " min read";
        opinion_div.appendChild(opinion_timeToRead);
        const opinion_image_div = document.createElement("div");
        opinion_link.appendChild(opinion_image_div);
        const opinion_img = document.createElement("img");
        opinion_image_div.appendChild(opinion_img);
        if(i%4 == 0)
        {
            opinion_link.classList.add("opinion-link", "col-12", "row", "m-0", "p-0", "pt-3", "pb-3", "border-bottom");
            opinion_div.classList.add("opinion", "col-6", "m-0", "p-0","pe-2");
            opinion_author.classList.add("opinion-author", "col-12","row-1", "m-0", "p-0");
            opinion_title.classList.add("opinion-title", "col-12", "m-0", "p-0","ps-10");
            opinion_timeToRead.classList.add("article-time-to-read", "col-12", "m-0", "p-0");
            opinion_image_div.classList.add("opinion-image-div", "col-6", "row-6", "m-0", "p-0");
            opinion_img.setAttribute("src", "https://picsum.photos/300/300?random=" + Math.floor(Math.random() * 100));
            opinion_img.classList.add("opinion-img", "col-12", "m-0", "p-0", "float-end");
        }
        else
        {
            opinion_link.classList.add("opinion-link", "col-12", "row", "m-0", "p-0", "pt-3", "pb-3", "border-bottom");
            opinion_div.classList.add("opinion", "col-8", "row", "m-0", "p-0","pe-2");
            opinion_author.classList.add("opinion-author", "col-12", "m-0", "p-0");
            opinion_title.classList.add("opinion-title", "col-12", "m-0", "p-0");
            opinion_timeToRead.classList.add("article-time-to-read", "col-12", "m-0", "p-0");
            opinion_image_div.classList.add("opinion-image-div", "col-4", "row-6", "m-0", "p-0");
            opinion_img.classList.add("opinion-img", "col-12", "m-0", "p-0", "float-end");
            opinion_img.setAttribute("src", "https://picsum.photos/520/348?random=" + Math.floor(Math.random() * 100));
        }
    }

    //Creare qui uno slideshow con 4 raggruppamenti di 2 articoli affiancati
    const slideshow_container_div = document.createElement("div");
    slideshow_container_div.classList.add("slideshow-container","col-12","row","m-0","p-0","pt-2","pb-4","border-bottom","border-dark");
    right_articles_div.appendChild(slideshow_container_div);
    const slideshow_section_title = document.createElement("a");
    slideshow_section_title.classList.add("slideshow-section-title","col-12","row","m-0","p-0","pb-2","float-start");
    slideshow_section_title.href = "slideshow.html";
    slideshow_section_title.innerHTML = "Slideshow";
    slideshow_container_div.appendChild(slideshow_section_title);
    for(let i= 0; i < 4; i++) {
        const slideshow_div = document.createElement("div");
        slideshow_div.classList.add("slideshow","col-6","row","m-0","p-0");
        slideshow_div.classList.add("pe-2","border-end");
        slideshow_container_div.appendChild(slideshow_div);
        const slideshow_img = document.createElement("img");
        slideshow_img.classList.add("slideshow-img","col-12","m-0","p-0");
        slideshow_img.setAttribute("src", "https://picsum.photos/520/348?random=" + Math.floor(Math.random() * 100));
        slideshow_div.appendChild(slideshow_img);
        const slideshow_title = document.createElement("h3");
        slideshow_title.classList.add("opinion-title","col-12","m-0","p-0");
        slideshow_title.innerHTML = "Lorem ipsum dolor sit amet";
        slideshow_div.appendChild(slideshow_title);
        const slideshow_timeToRead = document.createElement("p");
        slideshow_timeToRead.classList.add("article-time-to-read","col-12","m-0","p-0");
        slideshow_timeToRead.innerHTML = "5 min read";
        slideshow_div.appendChild(slideshow_timeToRead);


        const slideshow_div2 = document.createElement("div");
        slideshow_div2.classList.add("slideshow","col-6","row","m-0","p-0");
        slideshow_div2.classList.add("ps-2");
        slideshow_container_div.appendChild(slideshow_div2);
        const slideshow_img2 = document.createElement("img");
        slideshow_img2.classList.add("slideshow-img","col-12","m-0","p-0");
        slideshow_img2.setAttribute("src", "https://picsum.photos/520/348?random=" + Math.floor(Math.random() * 100));
        slideshow_div2.appendChild(slideshow_img2);
        const slideshow_title2 = document.createElement("h3");
        slideshow_title2.classList.add("opinion-title","col-12","m-0","p-0");
        slideshow_title2.innerHTML = "Lorem ipsum dolor sit amet";
        slideshow_div2.appendChild(slideshow_title2);
        const slideshow_timeToRead2 = document.createElement("p");
        slideshow_timeToRead2.classList.add("article-time-to-read","col-12","m-0","p-0");
        slideshow_timeToRead2.innerHTML = "5 min read";
        slideshow_div2.appendChild(slideshow_timeToRead2);
    }


}

function Article() {
    this.title = "Lorem ipsum dolor sit amet";
    this.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget";
    this.minutes = Math.floor(Math.random() * 6) + 1;
    this.link = "#";
}

function Opinion() {
    this.author = "David Megli";
    this.title = "Lorem ipsum dolor sit amet";
    this.minutes = Math.floor(Math.random() * 6) + 1;
    this.link = "#";
}

document.addEventListener("DOMContentLoaded", generateContent)