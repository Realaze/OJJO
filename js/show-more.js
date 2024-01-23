let showMore = document.querySelector('.button-more');
const productsLength = document.querySelectorAll('.catalog__card');
let showMoreWrapper = document.querySelector('.button-wrapper');


let items = 3;

showMore.addEventListener('click', () => {
    items += 3;
    const array = Array.from(document.querySelector('.row-cards2').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === 9) {
        showMore.classList.add('hidden');
    };
});