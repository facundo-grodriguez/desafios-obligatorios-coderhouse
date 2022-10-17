// LLAMADAS AL HTML DE PRODUCTOS
const filter = document.querySelector("#filter")//Filtro
const result = document.querySelector("#result")//resultado
const filtered = document.getElementsByName("filtered")//Menor precio / Mayor precio 
const select = document.querySelector("#filteredPrice")//select
const container = document.querySelector("#container")//Contenedor de cards
const btnCart = document.querySelector("#btnCart") //Contenedor de productos
const addProducts = document.querySelector("#addingProducts")
const allProducts = document.querySelector("#productos")//aparezcan todos los productos una vez cargado uno nuevo
const buy = document.querySelector("#buy")


// LLAMADAS DEL ADMINISTRADOR DE PRODUCTOS
let brand = document.querySelector("#brandNewProduct")
let pName = document.querySelector("#nameNewProduct")
let image = document.querySelector("#imageNewProduct")
let price = document.querySelector("#priceNewProduct")
const submit = document.querySelector("#submitNewProduct")

//LLAMADAS A LAS SECCIONES  
const section1 = document.querySelector("#products")
const section2 = document.querySelector("#form")

//LLAMADA A EL JSON
const URL = "./json/products.json"

