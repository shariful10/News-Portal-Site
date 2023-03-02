const fetchCategories = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res => res.json())
    .then(data => showCategories(data.data))
}

const showCategories = (data) => {
    // console.log(data);
    const categoriesContainer = document.getElementById("categories-container");
    data.news_category.forEach(singleCategories => {
        // console.log(singleCategories);
        categoriesContainer.innerHTML += `
        <a class="nav-link active fw-semibold" aria-current="page" href="#" onclick="fetchCategoryNewses('${singleCategories.category_id}',  '${singleCategories.category_name}')">${singleCategories.category_name}</a>
        `;
    });
}

// ─── Fetch All News Available In A Category ──────────────────────────────────
const fetchCategoryNewses = (category_id, category_name) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showAllNews(data.data, category_name))
}

const showAllNews = (data, category_name) => {
    // console.log(data, category_name);
    document.getElementById("news-count").innerText = data.length;
    document.getElementById("category-name").innerText = category_name;
    const newsContainer = document.getElementById("all-news");
    newsContainer.innerHTML = "";
    data.forEach((singleNews) => {
        console.log(singleNews);
        newsContainer.innerHTML += `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${singleNews.image_url}" class="img-fluid rounded p-4" alt="...">
                </div>
                <div class="col-md-8 d-flex flex-column">
                    <div class="card-body">
                        <h3 class="card-title">${singleNews.title}</h3>
                        <p class="card-text">${singleNews.details.slice(0, 340)}...</p>
                    </div>
                    <div class="card-footer border-0 bg-body">
                        <div>
                            <img src="${singleNews.author.img}" class="img-fluid rounded p-4" alt="..." height="40px" width="40px">
                            <div>
                                <p>${singleNews.author.name}</p>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>`;
    });
  };

// const fetchNewsDetail = (news_id) => {
//     let url = `https://openapi.programming-hero.com/api/news/${news_id}`;
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => showNewsDetail(data.data[0]));
// };

// const showNewsDetail = (newsDetail) => {
//     const { _id, image_url, title, details, author, total_view, others_info } = newsDetail;
//     document.getElementById("modal-body").innerHTML = `
//     <div class= "card mb-3">
//         <div class="row g-0">
//             <div class="col-md-12">
//                 <img src=${image_url} class="img-fluid rounded-start" alt="..." />
//             </div>
//             <div class="col-md-12 d-flex flex-column">
//                 <div class="card-body">
//                     <h5 class="card-title">${title} <span class="badge text-bg-warning">${others_info.is_trending ? "Trending" : "Not trending"}</span></h5>
//                     <p class="card-text">${details}</p>
//                 </div>
//                 <div class="card-footer border-0 bg-body d-flex justify-content-between">
//                     <div class="d-flex gap-2">
//                         <img src=${author.img} class="img-fluid rounded-circle" alt="..." height="40" width="40"/>
//                         <div>
//                             <p class="m-0 p-0">${author.name ? author.name : "Not available"}</p>
//                             <p class="m-0 p-0">${author.published_date}</p>
//                         </div>
//                     </div>
//                     <div class="d-flex align-items-center">
//                         <i class="fas fa-eye"></i>
//                         <p class="m-0 p-0">${total_view}</p>
//                     </div>
//                     <div>
//                         <i class="fas fa-star"></i>
//                     </div>          
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
// };

// // show trending news
// const showTrending = () => {
//     const trendingNews = fetchData.filter(singleData => singleData.others_info.is_trending === true);
//     const category_name = document.getElementById("category-name").innerText;
//     showAllNews(trendingNews, category_name);
// }

// // Optional Generate stars
// // ${generateStars(rating.number)}
// const generateStars= rating =>{
//     let ratingHTML= '';
//     for (let i = 1; i <= Math.floor(rating); i++){
//         ratingHTML +=`<i class="fas fa-star"></i>`;
      
//     }
//     if(rating - Math.floor(rating)>0){
//         ratingHTML+=`<i class="fas fa-star-half"></i>`
//     }
//     return ratingHTML
// }