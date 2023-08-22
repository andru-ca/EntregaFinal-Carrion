import gravel from '../assets/imagen/gravel.jpg';
import montana from '../assets/imagen/montana.jpg';
import ruta from '../assets/imagen/ruta.jpg';

const data = [
{
    id: "1",
    name: "Bike Gravel",
    price: 100,
    category: "gravel",
    img:gravel,
    stock:10,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
} ,
{
    id: "2",
    name: "Bike Montaña",
    price:200,
    category: "montana",
    img:montana,
    stock:20,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
} ,
{
    id: "3",
    name: "Bike Ruta",
    price:300,
    category: "ruta",
    img:ruta,
    stock:30,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

]

/*Promesa Productos */

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
resolve(data)
        }, 500)
    })
}

/*Promesa ID Productos */

export const getProductByID = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
resolve(data.find(prod => prod.id === productId))

        }, 100)

        
    })
    
}


/*Promesa ID Categorias */

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {     
        setTimeout(() => {        
resolve(data.filter(cat => cat.category === categoryId))
        }, 100)
    })
    
}

