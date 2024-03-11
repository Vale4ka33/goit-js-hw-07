const categories = document.querySelector('#categories')
const categoriesList = categories.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach(item => {
    const heading = item.querySelector('h2');
    const headingName = heading.textContent;
    const categoriesElem = item.querySelectorAll('li');
    console.log(
    `Category: ${headingName} Elements: ${categoriesElem.length}`);
})