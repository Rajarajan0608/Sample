let ApiLink = "https://fakestoreapi.com/products/"

let api = document.querySelector(".api")
let searchInput = document.querySelector("#search")
let categoryFilter = document.querySelector("#category")
let sortFilter = document.querySelector("#sort")

let allData = []

api.innerHTML = "<h2>Loading...</h2>"

fetch(ApiLink)
.then((data)=>{
    return data.json()
})
.then((objectData)=>{

    allData = objectData

    displayProducts(allData)

    loadCategories(allData)

})
.catch(()=>{
    
    api.innerHTML = "<h2>Failed to load data</h2>"
})

function displayProducts(data){

    api.innerHTML = ""

    data.forEach((a)=>{

        let dynamicTag = document.createElement("div")
        dynamicTag.classList.add("card")

        dynamicTag.innerHTML = `
            <h3>${a.title.slice(0,50)}...</h3>
            <img src="${a.image}" alt="${a.category}"/>
            <p>${a.description.slice(0,60)}...</p>
            <h4>₹ ${a.price}</h4>

            <button onclick="viewMore('${a.title}','${a.description}')">View More</button>
            <button onclick="addToCart(${a.id})">Add to Cart</button>  `
        api.append(dynamicTag)
    })
}

function viewMore(title, desc){
    alert(title + "\n\n" + desc)
}

searchInput.addEventListener("input", ()=>{

    let filtered = allData.filter((item)=>
        item.title.toLowerCase().includes(searchInput.value.toLowerCase())
    )

    displayProducts(filtered)
})

function loadCategories(data){

    let categories = [...new Set(data.map(item => item.category))]

    categories.forEach(cat => {
        let option = document.createElement("option")
        option.value = cat
        option.textContent = cat
        categoryFilter.append(option)
    })
}

categoryFilter.addEventListener("change", ()=>{

    let value = categoryFilter.value

    if(value === "all"){
        displayProducts(allData)
    }else{
        let filtered = allData.filter(item => item.category === value)
        displayProducts(filtered)
    }
})

sortFilter.addEventListener("change", ()=>{

    let value = sortFilter.value
    let sorted = [...allData]

    if(value === "low"){
        sorted.sort((a,b)=> a.price - b.price)
    }else if(value === "high"){
        sorted.sort((a,b)=> b.price - a.price)
    }

    displayProducts(sorted)
})

function addToCart(id){

    let cart = JSON.parse(localStorage.getItem("cart")) || []

    let product = allData.find(item => item.id === id)

    cart.push(product)

    localStorage.setItem("cart", JSON.stringify(cart))

    alert("Added to cart")
}