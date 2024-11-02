const productos= [
    {
        id:'1',
        name:'Random 1',
        stock:10,
        price:50,
        description:'lorem ipsu,dkfnkdnfdnfkdnflk',
        img:'https://picsum.photos/200',
        category:'nuevos'
    },
    {
        id:'2',
        name:'Random 2',
        stock:18,
        price:150,
        description:'lorem ipsu,dkfnkdnfdnfkdnflk',
        img:'https://picsum.photos/201',
        category:'ofertas'
    },
    {
        id:'3',
        name:'Random 3',
        stock:50,
        price:5000,
        description:'lorem ipsu,dkfnkdnfdnfkdnflk',
        img:'https://picsum.photos/203',
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