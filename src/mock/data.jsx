
//Para subir dinamicamente, borren los ids y el producto que subieron a mano
//Exporten el array para usarlo en otro lado
export const productos= [
    {
       
        name:'Random 2',
        stock:18,
        price:150,
        description:'lorem ipsu,dkfnkdnfdnfkdnflk',
        img:'https://picsum.photos/201',
        category:'ofertas'
    },
    {
       
        name:'Random 3',
        stock:50,
        price:5000,
        description:'lorem ipsu,dkfnkdnfdnfkdnflk',
        img:'https://picsum.photos/203',
        category:'mas vendidos'
    },
    {
      
        name:'Random 4',
        stock:550,
        price:55000,
        description:'lorem ipsu,dkfnkdnfdnfkdnflk',
        img:'../shopping-cart.png',
        category:'mas vendidos'
    },
    {
       
        name:'Random 4',
        stock:550,
        price:55000,
        description:'lorem ipsu,dkfnkdnfdnfkdnflk',
        img:'https://i.postimg.cc/zXJgYb8n/darth-vader-rogue-one-4k-zu-1280x720.jpg',
        category:'mas vendidos'
    }
]

export const getProducts = () =>{
  
    let error = false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(productos)
            
            }
        },3000)
    })
}

//Opcion sensilla
// export const getOneProduct = ()=>{
//     let error=false
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(!error){
//                 resolve(productos[1])
//             }else{
//                 reject('No hay data')
//             }
//         },3000)
//     })
// }

//Opcion dinamica

export const getOneProduct = (id)=>{
    let error=false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let product = productos.find((item)=> item.id === id)
                resolve(product)
            }else{
                reject('No hay data')
            }
        },3000)
    })
}