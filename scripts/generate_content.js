
function generateContent() {
    let numberOfArticles = 10;
    const main_content = document.getElementById("main-content");
    const anotherArticleTitleLength = 35;
    const anotherArticleTextLength = 75;

    const content_section1 = document.createElement("section");
    content_section1.classList.add("content-section","row","m-0","P-0");
    content_section1.setAttribute("class","container-fluid row flex-wrap col-12 col-sm-12 justify-content-between align-items-top mr-0 pr-0 border-bottom pb-3");
    main_content.appendChild(content_section1);

    content_section1.innerHTML = "";
    const left_section = document.createElement("section");
    left_section.classList.add("left-content-section","col-12","col-sm-12","col-xl-9","row","pe-0","ps-4","ps-xl-3","pe-sm-0","pe-md-0","mt-10","border-end-1");
    content_section1.appendChild(left_section);

    const right_section = document.createElement("section");
    right_section.classList.add("right-content-section","col-12","col-sm-12","col-xl-3","column","pt-2","pe-0","pe-sm-0","pe-md-4","mr-0","mr-xl-0","px-xl-0");
    content_section1.appendChild(right_section);

    //genero gli articoli di sinistra (principali)
    for (let i = 0; i < numberOfArticles; i++) {
        //creo una sezione per ogni elemento
        const article_section = document.createElement("section");
        article_section.classList.add("article-section","row");
        if(i===0) //se è il primo elemento azzero il padding top
            article_section.classList.add("pt-0");
        if(i==numberOfArticles-1)
            article_section.classList.add("article-section-last");
        left_section.appendChild(article_section);

        //creo un div per contenere l'immagine
        const article_div = document.createElement("div");
        article_div.classList.add("article-div","d-inline","col-12","col-sm-12","col-md-5","column");
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
        img_link.classList.add("img-link","d-inline","col-12","col-sm-12","col-md-7","row","p-md-0","pt-sm-2","pt-3","m-0");
        img_link.setAttribute("href",firstArticle.link);
        article_section.appendChild(img_link);
        //tiro un numero a caso, eventualmente aggiungo un carosello bootstrap 5
        if(Math.floor(Math.random() * 10) > 5) {
            let numberOfImages = Math.floor(Math.random() * 5) + 2;
            const carousel_div = document.createElement("div");
            carousel_div.classList.add("carousel-div","d-inline","col-12","align-items-top","p-0","m-0");
            img_link.appendChild(carousel_div);
            const carousel = document.createElement("div");
            carousel.classList.add("carousel","carousel-fade","slide");
            carousel.setAttribute("id","carousel"+i);
            carousel.setAttribute("data-bs-ride","carousel");
            carousel.setAttribute("data-bs-interval","2000");
            carousel_div.appendChild(carousel);
            const carousel_indicator = document.createElement("div");
            carousel_indicator.classList.add("carousel-indicators");
            carousel.appendChild(carousel_indicator);
            const carousel_inner = document.createElement("div");
            carousel_inner.classList.add("carousel-inner");
            carousel.appendChild(carousel_inner);
            for(let j = 0; j < numberOfImages; j++) {
                const carousel_indicator_item = document.createElement("button");
                carousel_indicator_item.classList.add("carousel-indicator-item");
                carousel_indicator_item.setAttribute("type","button");
                carousel_indicator_item.setAttribute("data-bs-target","#carousel"+i);
                carousel_indicator_item.setAttribute("data-bs-slide-to",j);
                carousel_indicator_item.setAttribute("aria-label","Slide "+j);
                carousel_indicator.appendChild(carousel_indicator_item);
                const carousel_item = document.createElement("div");
                carousel_item.classList.add("carousel-item");
                if(j===0) {
                    carousel_indicator_item.classList.add("active");
                    carousel_indicator_item.setAttribute("aria-current","true");
                    carousel_item.classList.add("active");
                }
                carousel_inner.appendChild(carousel_item);
                const img = document.createElement("img");
                img.classList.add("article-img");
                img.setAttribute("src","https://picsum.photos/520/348?random="+i+j);
                carousel_item.appendChild(img);
            }
            const carousel_control_prev = document.createElement("button");
            carousel_control_prev.classList.add("carousel-control-prev");
            carousel_control_prev.setAttribute("type","button");
            carousel_control_prev.setAttribute("data-bs-target","#carousel"+i);
            carousel_control_prev.setAttribute("data-bs-slide","prev");
            carousel.appendChild(carousel_control_prev);
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
            carousel_control_next.setAttribute("data-bs-target","#carousel"+i);
            carousel_control_next.setAttribute("data-bs-slide","next");
            carousel.appendChild(carousel_control_next);
            const carousel_control_next_span = document.createElement("span");
            carousel_control_next_span.classList.add("carousel-control-next-icon");
            carousel_control_next_span.setAttribute("aria-hidden","true");
            carousel_control_next.appendChild(carousel_control_next_span);
            const carousel_control_next_span2 = document.createElement("span");
            carousel_control_next_span2.classList.add("visually-hidden");
            carousel_control_next_span2.innerHTML = "Next";
            carousel_control_next.appendChild(carousel_control_next_span2);


        }
        else {
            const img_div = document.createElement("div");
            img_div.classList.add("img-div","d-inline","col-12");
            img_link.appendChild(img_div);
            const img = document.createElement("img");
            img.classList.add("article-img");
            img.setAttribute("src","https://picsum.photos/520/348?random="+i);
            img_div.appendChild(img);
        }

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

        let opinion = new Opinion();
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
        opinion_title.style.fontSize = "95%";
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
            opinion_div.classList.add("opinion", "col-9", "row", "m-0", "p-0","pe-2");
            opinion_author.classList.add("opinion-author", "col-12", "m-0", "p-0");
            opinion_title.classList.add("opinion-title", "col-12", "m-0", "p-0");
            opinion_timeToRead.classList.add("article-time-to-read", "col-12", "m-0", "p-0");
            opinion_image_div.classList.add("opinion-image-div", "col-3", "row-6", "m-0", "p-0");
            opinion_img.classList.add("opinion-img", "col-12", "m-0", "p-0", "float-end");
            opinion_img.setAttribute("src", "https://picsum.photos/300/300?random=" + Math.floor(Math.random() * 100));
            opinion_img.style.borderRadius = "50%";
        }
    }

    //Creare qui uno carousel con 4 raggruppamenti di 2 articoli affiancati
    const carousel_container_div = document.createElement("div");
    carousel_container_div.classList.add("carousel-container","carousel","carousel-dark","slide","m-0","p-0","border-bottom","border-dark","col-12","row","pt-2","pb-4");
    carousel_container_div.setAttribute("data-bs-ride","carousel");
    carousel_container_div.setAttribute("id","carouselOpinions");
    right_articles_div.appendChild(carousel_container_div);
    const carousel_inner_div = document.createElement("div");
    carousel_inner_div.classList.add("carousel-inner","m-0","p-0","col-12","row","d-flex","flex-nowrap");
    carousel_container_div.appendChild(carousel_inner_div);
    let groupsOfOpinions = 4;
    for(let i= 0; i < groupsOfOpinions; i++) {
        //div che fa da carousel-item
        const carousel_item_div = document.createElement("div");
        carousel_item_div.classList.add("carousel-group","carousel-item","m-0","p-0","col-12","row");
        if(i===0) {
            carousel_item_div.classList.add("active");
        }
        carousel_inner_div.appendChild(carousel_item_div);

        //div che contiene i 2 div sinistro e destro
        const carousel_div = document.createElement("div");
        carousel_div.classList.add("m-0","p-0","w-100","row","col-12");
        carousel_item_div.appendChild(carousel_div);

        let opinion = new Opinion();
        const carousel_link_1 = document.createElement("a");
        carousel_link_1.classList.add("opinion-link","m-0","p-0","col-6"); //PROVA A RIMUOVERE  TUTTO A PARTE LE CLASSI INDISPENSABILI PER IL CAROUSEL
        carousel_link_1.href = opinion.link;
        carousel_div.appendChild(carousel_link_1);
        const carousel_div1 = document.createElement("div");
        carousel_div1.classList.add("m-0","p-0","col-12");
        carousel_div1.classList.add("pe-2","border-end");
        carousel_link_1.appendChild(carousel_div1);
        const carousel_img1 = document.createElement("img");
        carousel_img1.classList.add("carousel-img","m-0","p-0","col-12");
        carousel_img1.setAttribute("src", "https://picsum.photos/520/348?random=" + Math.floor(Math.random() * 100));
        carousel_div1.appendChild(carousel_img1);
        const carousel_title1 = document.createElement("h3");
        carousel_title1.classList.add("opinion-title","m-0","p-0","col-12");
        carousel_title1.innerHTML = opinion.title;
        carousel_div1.appendChild(carousel_title1);
        const carousel_timeToRead1 = document.createElement("p");
        carousel_timeToRead1.classList.add("article-time-to-read","m-0","p-0","col-12");
        carousel_timeToRead1.innerHTML = opinion.minutes + " min read"
        carousel_div1.appendChild(carousel_timeToRead1);

        opinion = new Opinion();
        const carousel_link_2 = document.createElement("a");
        carousel_link_2.classList.add("opinion-link","m-0","p-0","col-6");
        carousel_link_2.href = opinion.link;
        carousel_div.appendChild(carousel_link_2);
        const carousel_div2 = document.createElement("div");
        carousel_div2.classList.add("m-0","p-0","col-12");
        carousel_div2.classList.add("ps-2");
        carousel_link_2.appendChild(carousel_div2);
        const carousel_img2 = document.createElement("img");
        carousel_img2.classList.add("carousel-img","m-0","p-0","col-12");
        carousel_img2.setAttribute("src", "https://picsum.photos/520/348?random=" + Math.floor(Math.random() * 100));
        carousel_div2.appendChild(carousel_img2);
        const carousel_title2 = document.createElement("h3");
        carousel_title2.classList.add("opinion-title","m-0","p-0","col-12");
        carousel_title2.innerHTML = opinion.title;
        carousel_div2.appendChild(carousel_title2);
        const carousel_timeToRead2 = document.createElement("p");
        carousel_timeToRead2.classList.add("article-time-to-read","m-0","p-0","col-12");
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
    carousel_control_next.setAttribute("data-bs-target","#carouselOpinions");
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
    another_article_1_title.innerHTML = article.title.substring(0, anotherArticleTitleLength);
    another_article_1_div.appendChild(another_article_1_title);
    const another_article_1_text = document.createElement("p");
    another_article_1_text.classList.add("col-12","m-0","p-0");
    another_article_1_text.classList.add("other-articles-text");
    another_article_1_text.innerHTML = article.text.substring(0, anotherArticleTextLength) + "...";
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
    another_article_2_link.classList.add("col-12","row","m-0","p-0");
    another_article_2_link.classList.add("mt-3", "border-bottom", "pb-3");
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
    another_article_2_text.innerHTML = article.text.substring(0, anotherArticleTextLength) + "...";
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

    //second content section
    const content_section2 = document.createElement("section");
    content_section2.classList.add("content-section","row","m-0","p-0");
    content_section2.setAttribute("class","container-fluid flex-wrap row justify-content-between align-items-top mr-0 pr-0 pb-3 border-bottom");
    main_content.appendChild(content_section2);

    const content_section2_title = document.createElement("h3");
    content_section2_title.classList.add("col-12","m-0","p-0","py-2");
    content_section2_title.classList.add("content-section-title");
    content_section2_title.innerHTML = "More News";
    content_section2.appendChild(content_section2_title);

    const content_section2_container = document.createElement("div");
    content_section2_container.classList.add("col-12","row","m-0","p-0");
    content_section2_container.classList.add("content-section-container");
    content_section2.appendChild(content_section2_container);

    //left column (col-3)
    const content_section2_left = document.createElement("div");
    content_section2_left.classList.add("col-12","col-sm-12","col-md-4","col-lg-3","column","m-0","p-0","pe-3");
    content_section2_left.classList.add("content-section-left");
    content_section2_container.appendChild(content_section2_left); //ci devo aggiungere i 3 articoli in verticale (3x row-4)
    for(let i=0; i<3; i++){

        let article = new Article();
        const content_section2_left_article = document.createElement("a");
        content_section2_left_article.classList.add("col-12","row","m-0","p-0","py-3","row-3");
        if(i<2)
            content_section2_left_article.classList.add("border-bottom");
        content_section2_left_article.classList.add("content-section-left-article");
        content_section2_left_article.setAttribute("href","#");
        content_section2_left.appendChild(content_section2_left_article);

        const content_section2_left_article_title = document.createElement("h3");
        content_section2_left_article_title.classList.add("col-12","m-0","p-0");
        content_section2_left_article_title.classList.add("article-right-small-title");
        content_section2_left_article_title.innerHTML = article.title;
        content_section2_left_article.appendChild(content_section2_left_article_title);

        const content_section2_left_article_text = document.createElement("p");
        content_section2_left_article_text.classList.add("col-12","m-0","p-0");
        content_section2_left_article_text.classList.add("article-right-small-text");
        content_section2_left_article_text.innerHTML = article.text;
        content_section2_left_article.appendChild(content_section2_left_article_text);

        const content_section2_left_article_timeToRead = document.createElement("p");
        content_section2_left_article_timeToRead.classList.add("col-12","m-0","p-0");
        content_section2_left_article_timeToRead.classList.add("article-time-to-read");
        content_section2_left_article_timeToRead.innerHTML = article.minutes + " min read";
        content_section2_left_article.appendChild(content_section2_left_article_timeToRead);
    }

    //center column (col-6)
    const content_section2_center = document.createElement("div");
    content_section2_center.classList.add("col-12","col-sm-12","col-md-8","col-lg-6","column","m-0","p-0","px-3","pe-lg-3","pd-sm-4","pe-4");
    content_section2_center.classList.add("content-section-center");
    content_section2_container.appendChild(content_section2_center); //ci devo aggiungere 1 immagine grande (row-8) e 1 articolo in verticale (row-4)

    article = new Article();
    const content_section2_center_link = document.createElement("a");
    content_section2_center_link.classList.add("col-12","row","m-0","p-0","py-3","row-8");
    content_section2_center_link.classList.add("content-section-center-link");
    content_section2_center_link.setAttribute("href",article.link);
    content_section2_center.appendChild(content_section2_center_link);

    const content_section2_center_img = document.createElement("img");
    content_section2_center_img.classList.add("col-12","m-0","p-0");
    content_section2_center_img.classList.add("content-section-center-img");
    content_section2_center_img.setAttribute("src", "https://picsum.photos/600/400?random=" + Math.floor(Math.random() * 100));
    content_section2_center_link.appendChild(content_section2_center_img);

    const content_section2_center_author = document.createElement("p");
    content_section2_center_author.classList.add("col-12","m-0","p-0");
    content_section2_center_author.classList.add("content-section-center-author");
    content_section2_center_author.innerHTML = "By " + article.author;

    const content_section2_center_article = document.createElement("a");
    content_section2_center_article.classList.add("col-12","row","m-0","p-0","py-3","row-4");
    content_section2_center_article.classList.add("content-section-center-article");
    content_section2_center_article.setAttribute("href",article.link);
    content_section2_center.appendChild(content_section2_center_article);

    const content_section2_center_article_title = document.createElement("h3");
    content_section2_center_article_title.classList.add("col-12","m-0","p-0");
    content_section2_center_article_title.classList.add("article-right-small-title");
    content_section2_center_article_title.innerHTML = article.title;
    content_section2_center_article.appendChild(content_section2_center_article_title);

    const content_section2_center_article_text = document.createElement("p");
    content_section2_center_article_text.classList.add("col-12","m-0","p-0");
    content_section2_center_article_text.classList.add("article-right-small-text");
    content_section2_center_article_text.innerHTML = article.text;
    content_section2_center_article.appendChild(content_section2_center_article_text);

    const content_section2_center_article_timeToRead = document.createElement("p");
    content_section2_center_article_timeToRead.classList.add("col-12","m-0","p-0");
    content_section2_center_article_timeToRead.classList.add("article-time-to-read");
    content_section2_center_article_timeToRead.innerHTML = article.minutes + " min read";
    content_section2_center_article.appendChild(content_section2_center_article_timeToRead);

    //right column (col-3)
    const content_section2_right = document.createElement("div");
    content_section2_right.classList.add("col-12","col-sm-12","col-md-12","col-lg-3","row","m-0","p-0","ps-lg-2","ps-0","ps-sm-0");
    content_section2_right.classList.add("content-section-right");
    content_section2_container.appendChild(content_section2_right); //ci devo aggiungere 1 immagine grande (row-8) e 2 articoli in verticale (2x row-4)

    for(let i=0 ; i<6 ; i++) {
        article = new Article();
        const content_section2_right_link = document.createElement("a");
        content_section2_right_link.classList.add("col-4","col-sm-4","col-lg-12","row","m-0","p-0","py-3","px-lg-0","px-2","row-2");
        content_section2_right_link.classList.add("content-section-right-link");
        if(i<5)
            content_section2_right_link.classList.add("border-bottom");
        else
            content_section2_right_link.classList.add("content-section2-right-link-last");
        content_section2_right_link.setAttribute("href",article.link);
        content_section2_right.appendChild(content_section2_right_link);

        const content_section2_right_title = document.createElement("h3");
        content_section2_right_title.classList.add("col-12","m-0","p-0");
        content_section2_right_title.classList.add("article-right-small-title");
        content_section2_right_title.innerHTML = article.title;
        content_section2_right_link.appendChild(content_section2_right_title);

        const content_section2_right_timeToRead = document.createElement("p");
        content_section2_right_timeToRead.classList.add("col-12","m-0","p-0");
        content_section2_right_timeToRead.classList.add("article-time-to-read");
        content_section2_right_timeToRead.innerHTML = article.minutes + " min read";
        content_section2_right_link.appendChild(content_section2_right_timeToRead);
    }

}

function Article() {
    /*this.title = "Lorem ipsum dolor sit amet";
    this.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget";*/
    let article = Math.floor(Math.random() * titles.length) + 1;
    this.title = titles[article] || "Lorem ipsum dolor sit amet consectetur adipiscing elit Donec auctor nisl eget";
    this.text = texts[article] || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet risus vel augue ullamcorper, at suscipit velit scelerisque. In pretium lacus sed diam efficitur accumsan.";
    this.minutes = Math.floor(Math.random() * 6) + 1;
    this.link = "#";
}

function Opinion() {
    /*this.author = "David Megli";
    this.title = "Lorem ipsum dolor sit amet";*/
    let opinion = Math.floor(Math.random() * opinionTitles.length) + 1;
    this.author = opinionAuthors[opinion] || "David Megli";
    this.title = opinionTitles[opinion] || "Lorem ipsum dolor sit amet";
    this.minutes = Math.floor(Math.random() * 6) + 1;
    this.link = "#";
}

document.addEventListener("DOMContentLoaded", generateContent);

let titles = [
    "The Benefits of Mindfulness: Strategies for a More Peaceful Life",
    "The Future of Work: Automation and Its Implications",
    "The Ethics of Artificial Intelligence: Exploring the Gray Areas",
    "The Science of Sleep: Tips for a Better Night's Rest",
    "The Future of Transportation: Balancing Innovation and Sustainability",
    "Exploring the World of Virtual Reality: Possibilities and Limitations",
    "The Psychology of Happiness: Understanding the Key to Well-Being",
    "The Future of Sustainable Agriculture: Challenges and Opportunities",
    "The Power of Community: How Connection Shapes Our Lives",
    "The Future of Space Travel: Challenges and Breakthroughs",
    "The Art of Leadership: Strategies for Success",
    "The Future of Renewable Energy: Innovations and Obstacles",
    "The Psychology of Resilience: Strategies for Overcoming Adversity",
    "The Future of Health: Advancements and Inequalities",
    "The Intersection of Art and Technology: Possibilities and Limitations",
    "Breaking Down Barriers: Advancements in Accessibility Technology",
    "The Ethics of Gene Editing: Balancing Benefits and Risks",
    "The Future of Transportation: Innovations and Challenges",
    "The Psychology of Decision-Making: Understanding Our Choices",
    "The Rise of E-Commerce: Trends and Implications",
    "The Future of Energy: Renewables vs. Fossil Fuels",
    "Exploring the Wonders of Space: Latest Discoveries",
    "The Power of Positive Thinking: Benefits and Strategies",
    "Cybersecurity in the Digital Age: Challenges and Solutions",
    "The Future of Education: Innovations and Challenges",
    "Exploring the Mysteries of the Human Brain",
    "The Impact of Social Media on Politics: Opportunities and Threats",
    "The Future of Healthcare: Challenges and Opportunities",
    "The Art of Communication: Strategies for Effective Dialogue",
    "The Future of Artificial Intelligence: Risks and Benefits",
    "The rise of populism: Understanding its origins and implications", //political titles
    "Navigating geopolitical tensions: The challenges of international diplomacy",
    "The changing face of political campaigns: How technology is transforming elections",
    "The power of youth: Examining the role of young people in shaping political movements",
    "The role of social media in modern politics: Exploring the opportunities and risks"
];

let texts = [  "Discover how practicing mindfulness can help you reduce stress and improve your mental well-being. This article explores practical strategies for incorporating mindfulness into your daily life.",
    "As automation continues to reshape the workplace, it's important to consider the implications for employees and society at large. This article examines the benefits and drawbacks of automation and offers insights on how we can adapt.",
    "As artificial intelligence becomes increasingly prevalent in our lives, it's important to consider the ethical implications. This article explores the gray areas of AI and offers insights on how we can navigate them.",
    "Good sleep is essential for overall health and well-being. This article offers tips for improving the quality of your sleep and explains the science behind why sleep is so important.",
    "As the world population continues to grow and climate change poses increasing threats, it's important to find sustainable transportation solutions. This article explores innovations in transportation and offers insights on how we can balance progress with environmental concerns.",
    "Virtual reality offers exciting possibilities for entertainment, education, and more. This article explores the potential and limitations of VR technology and offers insights on how it might impact our lives in the future.",
    "Happiness is a universal human goal, but what exactly is it and how can we achieve it? This article explores the psychology of happiness and offers practical strategies for increasing our well-being.",
    "As the global population continues to grow and the climate crisis worsens, it's important to find sustainable agriculture solutions. This article examines the challenges and opportunities in sustainable farming and offers insights on how we can move forward.",
    "Connection is a fundamental human need, and community plays an important role in our lives. This article explores the power of community and offers insights on how we can cultivate meaningful connections.",
    "As space exploration advances, it's important to consider the challenges and breakthroughs on the horizon. This article examines the current state of space travel and offers insights on what we might expect in the future.",
    "Leadership is a crucial skill in many contexts, but what makes a great leader? This article explores the art of leadership and offers practical strategies for becoming an effective leader.",
    "Renewable energy is key to addressing the climate crisis, but what innovations and obstacles stand in the way? This article examines the future of renewable energy and offers insights on how we can move toward a sustainable future.",
    "Resilience is the ability to overcome adversity and bounce back from difficult situations. This article explores the psychology of resilience and offers practical strategies for building resilience in ourselves and others.",
    "As healthcare continues to advance, it's important to consider the implications for individuals and society. This article examines the latest advancements and inequalities in healthcare and offers insights on how we can address these issues.",
    "Art and technology are converging in exciting ways, offering new possibilities for creativity and expression. This article explores the intersection of art and technology and offers insights on what we might expect in the future.",
    "As the world becomes more connected, cross-cultural communication skills are increasingly important. This article explores the challenges and opportunities in intercultural communication and offers insights on how we can become more effective communicators.",
    "As the digital world continues to evolve, it's important to consider the implications for privacy and security. This article examines the latest trends and threats in cybersecurity and offers insights on how we can protect ourselves online.",
    "Education is a fundamental human right and a key driver of social and economic progress. This article explores the challenges and innovations in education and offers insights on how we can improve access and outcomes for all learners.",
    "As the world population continues to grow and the climate crisis worsens, it's important to find sustainable solutions for housing. This article examines the latest innovations in green building and offers insights on how we can create more sustainable homes.",
    "Creativity is essential for innovation and personal fulfillment, but how can we cultivate and express it? This article explores the psychology of creativity and offers practical strategies for tapping into our creative potential.",
    "As the world becomes more complex and interconnected, critical thinking skills are increasingly important. This article explores the power of critical thinking and offers insights on how we can develop this skill in ourselves and others.",
    "The internet has revolutionized the way we live and work, but what are the implications for society? This article examines the benefits and drawbacks of the digital age and offers insights on how we can navigate the challenges.",
    "As the climate crisis worsens, it's important to consider the role of business in creating a more sustainable future. This article explores the latest trends in sustainable business and offers insights on how companies can prioritize both profit and social and environmental responsibility.",
    "Health and wellness are essential for a happy and fulfilling life, but how can we cultivate these qualities? This article offers tips for improving physical and mental health and explains the science behind why these practices are so beneficial.",
    "As technology advances, it's important to consider the ethical implications for society and individuals. This article explores the latest debates in tech ethics and offers insights on how we can navigate the gray areas.",
    "Work is a fundamental part of our lives, but how can we find purpose and fulfillment in our careers? This article explores the psychology of work and offers practical strategies for finding meaning in our professional lives.",
    "As the world becomes more diverse, it's important to understand and appreciate different cultures. This article explores the power of cultural awareness and offers insights on how we can become more open and inclusive.",
    "Mental health is a crucial component of overall well-being, but it's often stigmatized and misunderstood. This article explores the latest research on mental health and offers insights on how we can break down the barriers to treatment and support.",
    "As technology continues to transform the way we live and work, it's important to consider the role of ethics in innovation. This article examines the latest advancements and controversies in tech ethics and offers insights on how we can move forward.",
    "As we navigate the challenges of the modern world, emotional intelligence is increasingly important. This article explores the power of emotional intelligence and offers practical strategies for developing this skill in ourselves and others.",
    "Populism is on the rise around the world, but what is driving this trend and what are its implications? This article explores the roots of populism and its impact on democracy and global governance.",
    "Geopolitical tensions are a constant in international relations, but how can countries navigate these challenges? This article examines the role of diplomacy in managing conflicts and promoting cooperation across borders.",
    "Technology is transforming the way political campaigns are run, from social media advertising to data analytics. This article explores the latest trends in digital campaigning and the ethical considerations that come with them.",
    "Young people have played a pivotal role in political movements throughout history, from the civil rights movement to climate activism. This article examines the power of youth in shaping political discourse and effecting change.",
    "Social media has become a major force in modern politics, from spreading disinformation to mobilizing grassroots movements. This article examines the opportunities and risks of social media in the political sphere."
];

let opinionTitles = [
    "Why I'm Optimistic About the Future of Climate Action",
    "The Case for Abolishing the Death Penalty",
    "Why Free Speech Must Be Defended, Even When It's Offensive",
    "The Need for Better Mental Health Care in America",
    "Why Education Reform Is Critical to Closing the Achievement Gap",
    "Why the U.S. Needs to Do More to Address Income Inequality",
    "The Importance of Preserving America's National Parks",
    "Why We Need to Rethink Immigration Policy in the 21st Century",
    "Why Gun Control Is a Must for America's Future",
    "The Case for Universal Basic Income",
    "Why America Needs to Address Its Racial Inequities",
    "Why the U.S. Should Rejoin the Paris Climate Agreement",
    "The Need for Comprehensive Health Care Reform in America",
    "Why Immigration Is Essential to America's Economic Growth",
    "Why Protecting the Environment Must Be a Global Priority",
    "Why We Must Reform the Criminal Justice System in America",
    "The Case for Increasing the Minimum Wage",
    "Why We Need to Address the Student Debt Crisis",
    "Why America Must Invest More in Clean Energy",
    "The Importance of Reducing Carbon Emissions for Our Future"
];

let opinionAuthors = [
    "Jane Smith",
    "David Williams",
    "Sarah Johnson",
    "Michael Lee",
    "Emily Chen",
    "John Davis",
    "Laura Brown",
    "Maria Hernandez",
    "James Wilson",
    "Jennifer Kim",
    "Samuel Garcia",
    "Rachel Thompson",
    "Jessica Lee",
    "David Nguyen",
    "Sarah Taylor",
    "Mark Johnson",
    "Stephanie Brown",
    "Lisa Davis",
    "Emily Kim",
    "Daniel Park"
];
