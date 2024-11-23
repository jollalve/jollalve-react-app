const productos = [
    {
        id: '1',
        name: 'random1',
        stock: 10,
        price: 50,
        description: 'hola 1',
        img: 'https://picsum.photos/200',
        category: 'cartuchos',
    },
    {
        id: '2',
        name: 'random2',
        stock: 6,
        price: 70,
        description: 'hola 2',
        img: 'https://picsum.photos/200',
        category: 'ofertas',
    },
    {
        id: '3',
        name: 'random3',
        stock: 14,
        price: 30,
        description: 'hola 3',
        img: 'https://picsum.photos/200',
        category: 'agujas',
    }
]

export const getProduct = () => {
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            if(error){
                reject('Error, intente mas tarde')
            } else {
                resolve(productos)
            }
        },500)
    })
}

//opcion dinamica
export const getOneProduct = (id) => {
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (!error){
                let product = productos.find((item)=> item.id === id)
                resolve(product)
            } else {
                reject('No hay datos')
            }
        },1000)
    })
}