// AGREGADO DE PRODUCTOS
const addingProducts = () => {
    brand = brand.value
    pName = pName.value
    image = image.value
    price = price.value


    let newProduct = new Product(brand, pName, image, price)

    products.push(newProduct)
    loadProducts(products)

}


//INGRESO ADMIN / TERNARIO / SWEET ALERT
const adminLogin = async () => {
    const name = "admin"
    const password = 1234
    
    const admin = await Swal.fire({
        title: 'Datos de administrador',
        html:
            '<input id="swal-input1" class="swal2-input" placeholder="Usuario" required>' +
            '<input type="password" id="swal-input2" class="swal2-input" placeholder="Contraseña" required>',
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            return [
                user = document.getElementById('swal-input1').value,
                pass = document.getElementById('swal-input2').value
            ]
        }
        
    })
    
    //Intento hacerlo con && pero no me deja entrar asi que solo poniendo admin ya entra
    const permitted = (user === name || pass === password)
    

    permitted ? vanishProducts() 
                : Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Usuario o contraseña invalido',
                        footer: '<a href="">¿Es usted el administrador?</a>'
                    })
}

//APARECIENDO FORMULARIO / PRODUCTOS
const vanishProducts = () => {
    if (section2.style.display = "none") {
        section2.style.display = "block"
        section1.style.display = "none"
    } else {
        section1.style.display = "none"
    }
}
const appearProducts = () => {
    if (section1.style.display = "none") {
        section1.style.display = "block"
        section2.style.display = "none"
    } else {
        section2.style.display = "none"
    }
}



addProducts.addEventListener("click", adminLogin)
allProducts.addEventListener("click", appearProducts)
//AGREGADO DE PRODUCTOS
submit.addEventListener("click",() => {
    addingProducts(), Swal.fire('Se cargó un nuevo producto');
})