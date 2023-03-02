const fetchCategories = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res => res.json())
    .then(data => showCategories(data.data))
}

const showCategories = (data) => {
    console.log(data);
    const categoriesContainer = document.getElementById("categories-container");
    data.news_category.forEach(singleCategories => {
        console.log(singleCategories);
        categoriesContainer.innerHTML += `
        <a class="nav-link active fw-semibold" aria-current="page" href="#" onclick="fetchCategoryNewses('${singleCategories.category_id}',  '${singleCategories.category_name}')">${singleCategories.category_name}</a>
        `;
    });
}

// ─── Fetch All News Available In A Category ──────────────────────────────────
const fetchCategoryNewses = (category_id, category_name) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url).then(res => res.json()).then(data => showAllNews(data, category_name))
}

const showAllNews = (data, category_name) => {
    console.log(data, category_name);
}