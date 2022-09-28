// LLAMADAS AL HTML
const filter = document.querySelector("#filter")//Filtro
const result = document.querySelector("#result")//resultado
const filtered = document.getElementsByName("filtered")//Menor precio / Mayor precio 
const select = document.querySelector("#filteredPrice")//select
const addingNewProducts = document.querySelector("#addingProducts")//Cargando productos
const container = document.querySelector("#container")//Contenedor de cards
const btnCart = document.querySelector("#btnCart") //Contenedor de productos


// VARIABLES NECESARIAS 


// CLASE CONSTRUCTORA   
class Product {
    constructor(brand, name, image, price, quantity) {
        this.brand = brand
        this.name = name
        this.image = image
        this.price = price
        this.quantity = 0
    }
    priceIVA() {
        this.price = this.price * IVA
    }
    discountStock(units) {
        this.quantity = this.quantity - units
    }

}


// ARRAYS
const products = []
const search = []


// LISTA DE PRODUCTOS 
function list() {
    //XIAOMI
    products.push(new Product("XIAOMI", "REDMI 9A", "./assets/images/redmi-9A.jpg", 145))
    products.push(new Product("XIAOMI", "NOTE 9 PRO", "./assets/images/redmiNote9Pro.jpg", 290))
    products.push(new Product("XIAOMI", "REDMI 10", "./assets/images/redmi-10.png", 215))
    products.push(new Product("XIAOMI", "REDMI 10A", "./assets/images/redmi-10a.jpg", 180))
    products.push(new Product("XIAOMI", "REDMI 10C", "./assets/images/redmi-10c.jpg", 190))
    products.push(new Product("XIAOMI", "REDMI 10S", "./assets/images/redmi-10s.jpg", 260))
    products.push(new Product("XIAOMI", "REDMI 10 PRO", "./assets/images/redmi-10pro.jpg", 280))
    products.push(new Product("XIAOMI", "NOTE 11", "./assets/images/redmi-note11.jpg", 220))
    products.push(new Product("XIAOMI", "NOTE 11S", "./assets/images/redmi-note11s.jpg", 275))
    products.push(new Product("XIAOMI", "NOTE 11 PRO", "./assets/images/redmi-note11pro.jpg", 305))
    products.push(new Product("XIAOMI", "11 LITE G5 NE", "./assets/images/redmi-11lite.jpg", 365))
    products.push(new Product("XIAOMI", "MI 12", "./assets/images/redmi-mi12.jpg", 685))
    products.push(new Product("XIAOMI", "POCO M4 PRO", "./assets/images/redmi-poco4pro.jpg", 255))
    products.push(new Product("XIAOMI", "POCO X4 PRO", "./assets/images/redmi-pocox4pro.jpg", 360))

    //IPHONE
    products.push(new Product("IPHONE", "11", "./assets/images/iphone-11.jpg", 620))
    products.push(new Product("IPHONE", "12 MINI", "./assets/images/iphone-12mini.jpg", 790))
    products.push(new Product("IPHONE", "12", "./assets/images/iphone-12.jpg", 930))
    products.push(new Product("IPHONE", "13", "./assets/images/iphone-13.jpg", 1110))
    products.push(new Product("IPHONE", "13 PRO", "./assets/images/iphone-13pro.jpg", 1500))
    products.push(new Product("IPHONE", "13 PRO MAX 1TB", "./assets/images/iphone-13promax.jpg", 1850))

}


// AGREGADO DE PRODUCTOS
const addingProducts = () => {
    let brand = prompt("ingrese una marca").toUpperCase()
    let name = prompt("ingrese nombre").toUpperCase()
    let image = prompt("ingrese el url de la imagen")
    let price = Number(prompt("ingrese el precio"))


    let newProduct = new Product(brand, name, image, price)

    products.push(newProduct)
}

//INGRESO ADMIN / TERNARIO
const adminLogin = () => {
    alert("Solo el administrador puede cargar un nuevo producto")
    const name = "admin"
    const password = 1234
    const nameUser = prompt("nombre")
    const passwordUser = prompt("contraseña")
    const permitted = (nameUser === name || passwordUser === password)
    
    permitted ? (addingProducts(), loadProducts(products)) : alert("Usuario o contraseña invalido") 
}

// CARGANDO PRODUCTOS (NUEVO)
let div = ""
const loadProducts = (products) => {
    container.innerHTML = ""
    for (const product of products) {
        div = document.createElement("div")
        div.setAttribute("class", "card text-center col-xl-2 col-md-3 col-sm-4 col-8  m-3")

        div.innerHTML += ` 

        <img class="card-img image" src="${product.image}" onerror="this.src='./assets/images/remodelacion.jpg'" alt="Hubo un error">
        <div class="card-info">
            <p class="text-title">${product.name} </p>
            <p class="text-body">${product.brand}</p>
        </div>
        <div class="card-footer">
            <span class="text-title">${product.price} USD</span>
            
            <div class="card-button">
                <svg class="svg-icon buttonCart " viewBox="0 0 20 20" id="${product.name}">
                    <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                    <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                    <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                </svg>
            </div>
        </div>
    
            `
        container.appendChild(div)
    } 
}
list()
loadProducts(products)


// PARA ORDENAR LOS PRECIOS (NUEVO)
function optionPrice() {   
    products.sort((a, b) => {
        if (filteredPrice.value === "lowerPrice") {
            if (a.price > b.price)
                return 1
            if (a.price < b.price)
                return -1
            return 0
        }
        if (filteredPrice.value === "higherPrice") {
            if (a.price > b.price)
                return -1
            if (a.price < b.price)
                return 1
            return 0
        }
    })
    loadProducts(products)
}


// MAS DE UN RESULTADO
function searching() {
    let parameter = filter.value.toUpperCase()
    if (parameter !== "") {
        const result = products.filter(product => product.name.match(parameter))
        if (result.length !== 0) {
            search.push(result)
            search.map(search => {
                products
                loadProducts(search)
            })
        } else if (parameter !== "") {
            result1 = products.filter(product => product.brand.match(parameter))
            if (result1.length !== 0) {
                search.push(result1)
                search.map(search => {
                    products
                    loadProducts(search)
                })
            } else {
                alert("No se encontro el producto")
            }
        }
    }
}


loadCart()

//BUSQUEDA DE ATAJO ENTER


function shortcut(e) {
    if (e.key === "Enter") {
        searching()
    }
}

// BOTONES

//OPCION DE PRECIOS
select.addEventListener("change", () => optionPrice())
//AGREGADO DE PRODUCTOS
addingNewProducts.addEventListener("click", () => adminLogin())
//BUSCADOR
result.addEventListener("click", searching)
filter.addEventListener("keypress", () => shortcut(e) )