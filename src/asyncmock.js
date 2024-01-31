const productos = [
    {id: "1", nombre:"Yerba", precio:250, img:"./img/yerba.jpg", idCat:"2"},
    {id: "2", nombre:"te", precio:50, img:"./img/te.jpg", idCat:"2"},
    {id: "3", nombre:"cafe", precio:450, img:"./img/cafe.jpg", idCat:"3"},
    {id: "4", nombre:"leche", precio:150, img:"./img/leche.jpg", idCat:"3"}
]


export const getProduct = () => {
    return new Promise ( (resolve) =>{
        setTimeout ( ()=> {
            resolve(productos)

        },2000)
    })
}

//funcion para retornar solo 1 item

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
            
        }, 1000);
    })
}
//Crear funcion para filtrar por categoria

export const getProductosForCategory = (idCategory) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productsCategory = productos.filter(prod => prod.idCat === idCategory);
            resolve(productsCategory)
            
        },2000)
    })
}