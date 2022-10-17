// ARRAYS
const search = []

// UTILIZANDO FETCH 
const contentHTML = ""
const products = []
const loadContent = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        loadProducts(data)
        products.push(...data)
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se pueden cargar los productos'
        })
    } finally {
        loadCart()
    }
}
loadContent()


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
    loadCart()
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
            secondResult = products.filter(product => product.brand.match(parameter))
            if (secondResult.length !== 0) {
                search.push(secondResult)
                search.map(search => {
                    products
                    loadProducts(search)
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No existe ese producto'
                })
            }
        }
    }
    loadCart()
}



//BUSQUEDA DE ATAJO ENTER
const shortcut = (e) => {
        if (e.key === "Enter") {
            searching()
        }
}

// BOTONES

//OPCION DE PRECIOS
select.addEventListener("change", () => optionPrice())
//BUSCADOR
result.addEventListener("click", searching)
filter.addEventListener("keydown",(e) =>{ e.preventdefault, shortcut(e) })

