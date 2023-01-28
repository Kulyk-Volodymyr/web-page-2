/* --------------- Modal Image ---------------*/
const modalImageWindow = document.getElementById('modal-img');
modalImageWindow.addEventListener('click', hideModalImage);

let section1images1 = document.querySelectorAll('.s-1-1-img img');
for (let i of section1images1) i.addEventListener('click', showModalImage);
let section1images2 = document.querySelectorAll('.s-1-2-img img');
for (let i of section1images2) i.addEventListener('click', showModalImage);
let section2images = document.querySelectorAll('.s-2-img img');
for (let i of section2images) i.addEventListener('click', showModalImage);
let section3images = document.querySelectorAll('.s-3-img img');
for (let i of section3images) i.addEventListener('click', showModalImage);

function showModalImage() {
    if (window.innerWidth > 767) {
        let modalImage = document.getElementById('modal-img-image');
        modalImage.src = `${this.src}`;
        modalImageWindow.style.display = 'block';
    }
}

function hideModalImage() { modalImageWindow.style.display = 'none'; }

/* --------------- Modal Article ---------------*/
const modalArticleWindow = document.getElementById('modal-article');
modalArticleWindow.addEventListener('click', hideModalArticle);

let articles = document.querySelectorAll('.aside-article');
for (let i of articles) i.addEventListener('click', showModalArticle);

function showModalArticle() {
    let modalArticle = document.getElementById('modal-article-container');
    modalArticle.innerHTML = this.innerHTML;
    modalArticle.innerHTML = 
        modalArticle.innerHTML.slice((modalArticle.innerHTML.length * -1), -20);
    modalArticleWindow.style.display = 'block';
}

function hideModalArticle() { modalArticleWindow.style.display = 'none'; }
