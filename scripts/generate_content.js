
function generateContent() {
    let numberOfArticles = 10;
    const main_content = document.getElementById("main-content");
    const anotherArticleTitleLength = 26;

    main_content.innerHTML = "";
    const left_section = document.createElement("section");
    left_section.classList.add("left-content-section","col-12","col-xl-9","row","pe-0","ps-4","ps-xl-3","mt-10","border-end-1");
    main_content.appendChild(left_section);

    const right_section = document.createElement("section");
    right_section.classList.add("right-content-section","col-12","col-xl-3","column","pt-2","pe-4","mr-0","mr-xl-0","px-xl-0");
    main_content.appendChild(right_section);

    //genero gli articoli di sinistra (principali)
    for (let i = 0; i < numberOfArticles; i++) {
        //creo una sezione per ogni elemento
        const article_section = document.createElement("section");
        article_section.classList.add("article-section","row");
        if(i===0) //se è il primo elemento azzero il padding top
            article_section.classList.add("pt-0");
        left_section.appendChild(article_section);

        //creo un div per contenere l'immagine
        const article_div = document.createElement("div");
        article_div.classList.add("article-div","d-inline","col-5","column");
        article_section.appendChild(article_div);

        numberOfArticlesPerSection = 2;

        let firstArticle = new Article();

        for(let j = 0; j < numberOfArticlesPerSection; j++) {
            let article = new Article();
            if(j===0)
                article = firstArticle;

            const article_link = document.createElement("a");
            article_link.classList.add("article-link");
            article_link.href = article.link;
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
            if(i===0 && j===0) //aumento il font-size del primo titolo della prima sezione
                title.classList.add("first-article-title");
            title.innerHTML = article.title;
            single_article_div.appendChild(title);

            const text = document.createElement("p");
            text.classList.add("article-text");
            text.innerHTML = article.text;
            single_article_div.appendChild(text);

            const timeToRead = document.createElement("p");
            timeToRead.classList.add("article-time-to-read","text-uppercase");
            timeToRead.innerHTML = article.minutes + " min read";
            single_article_div.appendChild(timeToRead);
        }
        //creo un link che contiene un'immagine e linka al primo articolo della sezione
        const img_link = document.createElement("a");
        img_link.classList.add("img-link","d-inline","col-7","row","p-0","m-0");
        img_link.setAttribute("href",firstArticle.link);
        article_section.appendChild(img_link);
        const img_div = document.createElement("div");
        img_div.classList.add("img-div","d-inline","col-12");
        img_link.appendChild(img_div);
        const img = document.createElement("img");
        img.classList.add("article-img");
        img.setAttribute("src","https://picsum.photos/520/348?random="+i);
        img_div.appendChild(img);
        const author = document.createElement("p");
        author.classList.add("article-author");
        author.innerHTML = "David Megli";
        img_link.appendChild(author);
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
    article_right_1_div.classList.add("article-right-1","col-12","h-100","flex-xl-row","flex-sm-row-reverse","flex-row-reverse","m-0","px-0","pt-0","pb-3","border-bottom");
    article_right_1_link.appendChild(article_right_1_div);
    const article_right_1_img = document.createElement("img","m-0","p-0");
    article_right_1_img.classList.add("article-right-1-img","row-6","m-0","p-xl-0","pb-3","pb-sm-3");
    article_right_1_img.classList.add("col-6","col-lg-6","col-xl-12","float-end","float-sm-end","float-xl-center");
    article_right_1_img.setAttribute("src","https://picsum.photos/520/348?random="+Math.floor(Math.random() * 100));
    article_right_1_div.appendChild(article_right_1_img);
    const article_right_1_author = document.createElement("p");
    article_right_1_author.classList.add("article-author","float-end");
    article_right_1_author.innerHTML = "David Megli";
    article_right_1_div.appendChild(article_right_1_author);
    const article_right_1_title = document.createElement("h3");
    article_right_1_title.classList.add("article-right-title","pt-3");
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

    //Opinions
    const opinion_container_div = document.createElement("div");
    opinion_container_div.classList.add("opinion-container","col-12","column","m-0","px-0","pt-2","pb-4");
    right_articles_div.appendChild(opinion_container_div);
    const opinion_section_title = document.createElement("a");
    opinion_section_title.classList.add("opinion-section-title","right-section-title","col-12","row","m-0","p-0","pb-2","float-start");
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
        if(i%4 === 0)
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

    //Creare qui uno carousel con 4 raggruppamenti di 2 articoli affiancati
    const carousel_container_div = document.createElement("div");
    carousel_container_div.classList.add("carousel-container","carousel","carousel-dark","slide","col-12","row","m-0","p-0","pt-2","pb-4","border-bottom","border-dark");
    carousel_container_div.setAttribute("data-bs-ride","carousel");
    carousel_container_div.setAttribute("id","carouselOpinions");
    right_articles_div.appendChild(carousel_container_div);
    const carousel_inner_div = document.createElement("div");
    carousel_inner_div.classList.add("carousel-inner","col-12","row","m-0","p-0");
    carousel_container_div.appendChild(carousel_inner_div);
    let groupsOfOpinions = 4;
    for(let i= 0; i < groupsOfOpinions; i++) {
        //div che fa da carousel-item
        const carousel_item_div = document.createElement("div");
        carousel_item_div.classList.add("carousel-group","carousel-item","col-12","row","m-0","p-0");
        if(i===0) {
            carousel_item_div.classList.add("active");
        }
        carousel_inner_div.appendChild(carousel_item_div);

        //div che contiene i 2 div sinistro e destro
        const carousel_div = document.createElement("div");
        carousel_div.classList.add("col-12","row","m-0","p-0");
        carousel_item_div.appendChild(carousel_div);

        let opinion = new Opinion();
        const carousel_link_1 = document.createElement("a");
        carousel_link_1.classList.add("opinion-link","col-6","m-0","p-0");
        carousel_link_1.href = opinion.link;
        carousel_div.appendChild(carousel_link_1);
        const carousel_div1 = document.createElement("div");
        carousel_div1.classList.add("col-12","m-0","p-0");
        carousel_div1.classList.add("pe-2","border-end");
        carousel_link_1.appendChild(carousel_div1);
        const carousel_img1 = document.createElement("img");
        carousel_img1.classList.add("carousel-img","col-12","m-0","p-0");
        carousel_img1.setAttribute("src", "https://picsum.photos/520/348?random=" + Math.floor(Math.random() * 100));
        carousel_div1.appendChild(carousel_img1);
        const carousel_title1 = document.createElement("h3");
        carousel_title1.classList.add("opinion-title","col-12","m-0","p-0");
        carousel_title1.innerHTML = opinion.title+i; //cancellare i
        carousel_div1.appendChild(carousel_title1);
        const carousel_timeToRead1 = document.createElement("p");
        carousel_timeToRead1.classList.add("article-time-to-read","col-12","m-0","p-0");
        carousel_timeToRead1.innerHTML = opinion.minutes + " min read"
        carousel_div1.appendChild(carousel_timeToRead1);

        opinion = new Opinion();
        const carousel_link_2 = document.createElement("a");
        carousel_link_2.classList.add("opinion-link","col-6","m-0","p-0");
        carousel_link_2.href = opinion.link;
        carousel_div.appendChild(carousel_link_2);
        const carousel_div2 = document.createElement("div");
        carousel_div2.classList.add("col-12","m-0","p-0");
        carousel_div2.classList.add("ps-2");
        carousel_link_2.appendChild(carousel_div2);
        const carousel_img2 = document.createElement("img");
        carousel_img2.classList.add("carousel-img","col-12","m-0","p-0");
        carousel_img2.setAttribute("src", "https://picsum.photos/520/348?random=" + Math.floor(Math.random() * 100));
        carousel_div2.appendChild(carousel_img2);
        const carousel_title2 = document.createElement("h3");
        carousel_title2.classList.add("opinion-title","col-12","m-0","p-0");
        carousel_title2.innerHTML = opinion.title;
        carousel_div2.appendChild(carousel_title2);
        const carousel_timeToRead2 = document.createElement("p");
        carousel_timeToRead2.classList.add("article-time-to-read","col-12","m-0","p-0");
        carousel_timeToRead2.innerHTML = opinion.minutes + " min read";
        carousel_div2.appendChild(carousel_timeToRead2);
        //carousel
    }
    const carousel_control_prev = document.createElement("button");
    carousel_control_prev.classList.add("carousel-control-prev");
    carousel_control_prev.setAttribute("type","button");
    carousel_control_prev.setAttribute("data-bs-target","#carouselOpinions");
    carousel_control_prev.setAttribute("data-bs-slide","prev");
    carousel_container_div.appendChild(carousel_control_prev);
    const carousel_control_prev_span = document.createElement("span");
    carousel_control_prev_span.classList.add("carousel-control-prev-icon");
    carousel_control_prev_span.setAttribute("aria-hidden","true");
    carousel_control_prev.appendChild(carousel_control_prev_span);
    const carousel_control_prev_span2 = document.createElement("span");
    carousel_control_prev_span2.classList.add("visually-hidden");
    carousel_control_prev_span2.innerHTML = "Previous";
    carousel_control_prev.appendChild(carousel_control_prev_span2);

    const carousel_control_next = document.createElement("button");
    carousel_control_next.classList.add("carousel-control-next");
    carousel_control_next.setAttribute("type","button");
    carousel_control_next.setAttribute("data-bs-target","carouselOpinions");
    carousel_control_next.setAttribute("data-bs-slide","next");
    carousel_container_div.appendChild(carousel_control_next);
    const carousel_control_next_span = document.createElement("span");
    carousel_control_next_span.classList.add("carousel-control-next-icon");
    carousel_control_next_span.setAttribute("aria-hidden","true");
    carousel_control_next.appendChild(carousel_control_next_span);
    const carousel_control_next_span2 = document.createElement("span");
    carousel_control_next_span2.classList.add("visually-hidden");
    carousel_control_next_span2.innerHTML = "Next";
    carousel_control_next.appendChild(carousel_control_next_span2);

    //other articles
    article = new Article();
    const another_article_1_link = document.createElement("div");
    another_article_1_link.classList.add("col-12","row","m-0","p-0");
    another_article_1_link.classList.add("mt-3", "border-bottom", "pb-3");
    another_article_1_link.classList.add("other-articles");
    right_articles_div.appendChild(another_article_1_link);
    const another_article_1_div = document.createElement("div");
    another_article_1_div.classList.add("col-8","row","m-0","p-0","pe-2");
    another_article_1_link.appendChild(another_article_1_div);
    const another_article_1_title = document.createElement("h3");
    another_article_1_title.classList.add("col-12","m-0","p-0");
    another_article_1_title.classList.add("other-articles-title");
    another_article_1_title.innerHTML = article.title;
    another_article_1_div.appendChild(another_article_1_title);
    const another_article_1_text = document.createElement("p");
    another_article_1_text.classList.add("col-12","m-0","p-0");
    another_article_1_text.classList.add("other-articles-text");
    another_article_1_text.innerHTML = article.text.substring(0, anotherArticleTitleLength);
    another_article_1_div.appendChild(another_article_1_text);
    const another_article_1_timeToRead = document.createElement("p");
    another_article_1_timeToRead.classList.add("col-12","m-0","p-0");
    another_article_1_timeToRead.classList.add("article-time-to-read");
    another_article_1_timeToRead.innerHTML = article.minutes + " min read";
    another_article_1_div.appendChild(another_article_1_timeToRead);
    const another_article_1_img = document.createElement("img");
    another_article_1_img.classList.add("col-4","m-0","p-0");
    another_article_1_img.classList.add("other-articles-img");
    another_article_1_img.setAttribute("src", "https://picsum.photos/300/300?random=" + Math.floor(Math.random() * 100));
    another_article_1_link.appendChild(another_article_1_img);

    article = new Article();
    const another_article_2_link = document.createElement("div");
    another_article_2_link.classList.add("col-12","row","m-0","p-0", "border-bottom","border-dark", "pb-3");
    another_article_2_link.classList.add("mt-3");
    another_article_2_link.classList.add("other-articles");
    right_articles_div.appendChild(another_article_2_link);
    const another_article_2_div = document.createElement("div");
    another_article_2_div.classList.add("col-8","row","m-0","p-0","pe-2");
    another_article_2_link.appendChild(another_article_2_div);
    const another_article_2_title = document.createElement("h3");
    another_article_2_title.classList.add("col-12","m-0","p-0");
    another_article_2_title.classList.add("other-articles-title");
    another_article_2_title.innerHTML = article.title.substring(0, anotherArticleTitleLength);
    another_article_2_div.appendChild(another_article_2_title);
    const another_article_2_text = document.createElement("p");
    another_article_2_text.classList.add("col-12","m-0","p-0");
    another_article_2_text.classList.add("other-articles-text");
    another_article_2_text.innerHTML = article.text;
    another_article_2_div.appendChild(another_article_2_text);
    const another_article_2_timeToRead = document.createElement("p");
    another_article_2_timeToRead.classList.add("col-12","m-0","p-0");
    another_article_2_timeToRead.classList.add("article-time-to-read");
    another_article_2_timeToRead.innerHTML = article.minutes + " min read";
    another_article_2_div.appendChild(another_article_2_timeToRead);
    const another_article_2_img = document.createElement("img");
    another_article_2_img.classList.add("col-4","m-0","p-0");
    another_article_2_img.classList.add("other-articles-img");
    another_article_2_img.setAttribute("src", "https://picsum.photos/300/300?random=" + Math.floor(Math.random() * 100));
    another_article_2_link.appendChild(another_article_2_img);

    const in_case_you_missed_it = document.createElement("span");
    in_case_you_missed_it.classList.add("right-section-title","col-12","m-0","p-0");
    in_case_you_missed_it.classList.add("mt-2", "mb-1");
    in_case_you_missed_it.innerHTML = "In Case You Missed It";
    right_articles_div.appendChild(in_case_you_missed_it);
    const top_picks_recommended_for_you = document.createElement("span");
    top_picks_recommended_for_you.classList.add("right-section-subtitle","col-12","m-0","p-0","mb-2","mw-100");
    top_picks_recommended_for_you.innerHTML = "Top picks from The Times, recommended for you";
    right_articles_div.appendChild(top_picks_recommended_for_you);

    let inCaseYouMissedItArticles = 5;
    for (let i = 0; i < inCaseYouMissedItArticles; i++) {
        let article = new Article();
        const in_case_you_missed_it_link = document.createElement("a");
        in_case_you_missed_it_link.classList.add("col-12","row","m-0","p-0", "border-bottom", "pb-3");
        in_case_you_missed_it_link.classList.add("mt-3");
        in_case_you_missed_it_link.classList.add("other-articles");
        in_case_you_missed_it_link.setAttribute("href", "#");
        right_articles_div.appendChild(in_case_you_missed_it_link);
        const in_case_you_missed_it_div = document.createElement("div");
        in_case_you_missed_it_div.classList.add("col-8","row","m-0","p-0","pe-2");
        in_case_you_missed_it_link.appendChild(in_case_you_missed_it_div);
        const in_case_you_missed_it_title = document.createElement("h3");
        in_case_you_missed_it_title.classList.add("col-12","m-0","p-0");
        in_case_you_missed_it_title.classList.add("article-right-small-title");
        in_case_you_missed_it_title.innerHTML = article.title;
        in_case_you_missed_it_div.appendChild(in_case_you_missed_it_title);
        const in_case_you_missed_it_timeToRead = document.createElement("p");
        in_case_you_missed_it_timeToRead.classList.add("col-12","m-0","p-0");
        in_case_you_missed_it_timeToRead.classList.add("article-time-to-read");
        in_case_you_missed_it_timeToRead.innerHTML = article.minutes + " min read";
        in_case_you_missed_it_div.appendChild(in_case_you_missed_it_timeToRead);
        const in_case_you_missed_it_img = document.createElement("img");
        in_case_you_missed_it_img.classList.add("col-4","m-0","p-0");
        in_case_you_missed_it_img.classList.add("other-articles-img");
        in_case_you_missed_it_img.setAttribute("src", "https://picsum.photos/300/300?random=" + Math.floor(Math.random() * 100));
        in_case_you_missed_it_link.appendChild(in_case_you_missed_it_img);

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