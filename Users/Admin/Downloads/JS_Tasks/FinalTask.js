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

    loadCategory(allData)
})

.catch(()=>{
    api.innerHTML = "<h2>Failed to load data</h2>"
})

function displayProducts(data){
       api.innerHTML = ""
    data.forEach((a)=>{

           let dynamicTag = document.createElement("div")

        dynamicTag.classList.add("card")
        dynamicTag.innerHTML = `<h3>${a.title.slice(0,50)}...</h3><img src="${a.image}" alt="${a.category}"> <p>${a.description.slice(0,60)}...</p>
        <h4>₹ ${a.price}</h4>
        <button onclick="viewMore('${a.title}','${a.description}')">
        View More
        </button><button onclick="clk()">Add To Cart</button>`

        api.append(dynamicTag)
    })
}

function viewMore(title, desc){
    alert(title + " " + desc)
}


searchInput.addEventListener("input", ()=>{

    let value = searchInput.value.toLowerCase()

    let filteredData = allData.filter((item)=>{

        return item.title.toLowerCase().includes(value)
    })
    displayProducts(filteredData)
})


function loadCategory(data){

    let category = data.map((item)=>{
        return item.category
    })


let uniqueCategory = [...new Set(category)]

    uniqueCategory.forEach((cat)=>{

        let option = document.createElement("option")
        option.value = cat
        option.textContent = cat
        categoryFilter.append(option)
    })
}

categoryFilter.addEventListener("change", ()=>{

    let value = categoryFilter.value
    if(value == "all"){
        displayProducts(allData)
    }
    else{
        let filtered = allData.filter((item)=>{
            return item.category == value
        })
           displayProducts(filtered)
    }
})

sortFilter.addEventListener("change", ()=>{

    let value = sortFilter.value

    let sortedData = [...allData]
    if(value == "low"){

        sortedData.sort((a,b)=>{
            return a.price - b.price
        })
    }
    else if(value == "high"){
        sortedData.sort((a,b)=>{
            return b.price - a.price
        })
    }
    displayProducts(sortedData)
})

function clk(){

    alert("Product Added To Cart")
}
