// LLAMADAS DEL ADMINISTRADOR DE PRODUCTOS
const brand = document.querySelector("#brandNewProduct")
const name = document.querySelector("#nameNewProduct")
const image = document.querySelector("#imageNewProduct")
const price = document.querySelector("#priceNewProduct")
const submit = document.querySelector("#submitNewProduct")



// AGREGADO DE PRODUCTOS
/* const addingProducts = () => {
    let brand = prompt("ingrese una marca").toUpperCase()
    let name = prompt("ingrese nombre").toUpperCase()
    let image = prompt("ingrese el url de la imagen")
    let price = Number(prompt("ingrese el precio"))


    let newProduct = new Product(brand, name, image, price)

    products.push(newProduct)
} */
const addingProducts = () => {
    debugger
    let brand = brand.value.toUpperCase()
    let name = name.value.toUpperCase()
    let image = image.value
    let price = price.value


    let newProduct = new Product(brand, name, image, price)

    products.push(newProduct)
    loadProducts(products)
}

//AGREGADO DE PRODUCTOS
submit.addEventListener("click", () => addingProducts())