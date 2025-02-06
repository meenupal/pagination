
// Fake product datac
let x = "https://fakestoreapi.com/products";
async function f1(){
    await fetch(x)
    .then((response)=>(response.json()))
    .then((data)=>{const products = data;
        console.log(products);

// We will display 2 products per page
const itemsPerPage = 3;
let currentPage = 1;

// Function to display products for the current page
function displayProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear previous products

    // Calculate the products to show on this page
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageProducts = products.slice(start, end);

    // Display each product as a card
    pageProducts.forEach(product => {
        productContainer.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <p>${product.description}</p>
            </div>
        `;
    });
}

// Function to display pagination buttons
function displayPagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = ''; // Clear old pagination buttons

    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Previous button
    const prevButton = document.createElement('button');
    prevButton.innerText = 'Previous';
    prevButton.disabled = currentPage === 1; // Disable if on first page
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            displayProducts();
            displayPagination();
        }
    };
    paginationContainer.appendChild(prevButton);

    // for(let i = 1; i<=totalPage; i ++){
    //     const pagelink = document.createElement("a");
    //     pagelink.textLink.textContent = i;
    //     pagelink.href="#";
    //     pagelink.onclick = (function(i){
    //         return function(){
    //             currentPage=i;
    //             displayProducts(currentPage);
    //             displayPagination();
    //         }
    //     }) (i);
    //     paginationContainer.appendChild(pagelink);
    
    // }
    //  nextButton
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.disabled = currentPage === totalPages; // Disable if on last page
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayProducts();
            displayPagination();
        }
    };
    paginationContainer.appendChild(nextButton);
}

// Initial call to display products and pagination
displayProducts();
displayPagination();
});
}
f1();