function loadCategories(){
    
    //1 fetch data 
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

    //2 convert promise to json
    .then((res)=>res.json())

    //3.send data to display
    .then((data) => displayCategories(data.categories));
}

function displayCategories(categories){
//get the container

 const categoryContainer = document.getElementById("category-container");

 //Loop operation on array of object
 for(let cat of categories){
 
 //create element
 const categoryDiv = document.createElement("div");

categoryDiv.innerHTML=`
<button onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        
`;
//Append the element

categoryContainer.appendChild(categoryDiv)

 }
}

loadCategories();