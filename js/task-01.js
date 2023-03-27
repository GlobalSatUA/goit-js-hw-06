const categoriesList = document.querySelector('#categories');

const numberCategories = categoriesList.querySelectorAll('li.item').length;

console.log(`Number of categories: ${numberCategories}`);

categoriesList.querySelectorAll('li.item').forEach((category) => {
    
    const categoryName = category.querySelector('h2');

    const numberItems = category.querySelectorAll('ul li').length;

    console.log(`Category:${categoryName.textContent} 
Elements:${numberItems}`);
});
