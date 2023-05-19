const products = [

    {
        id:'1',
        nombre: "Remera All Black OZ",
        precio: 7500,
        categoria: 'Remeras',
        img:'https://http2.mlstatic.com/D_NQ_NP_630432-MLA52205963598_102022-W.jpg',
        stock:30,
        description: 'Camisa KUMBA original de algodon Oversize Negra'
    },
    {
        id:'2',
        nombre: "Remera All White OZ",
        precio: 7500,
        categoria: 'Remeras',
        img:'https://media.boohoo.com/i/boohoo/amm14077_white_xl/hombre-white-camiseta-oversize-con-cuello-caja-y-algodón-ecológico/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
        stock:30,
        description: 'Camisa KUMBA original de algodon Oversize Blanca'
    },
    {
        id:'3',
        nombre: "Remera OZ Samurai Brown ",
        precio: 7500,
        categoria: 'Remeras',
        img:'https://www.mattelsa.net/media/catalog/product/cache/11dadf1c318faa12046dcbbf38b711fe/7/1/71519-1.jpg',
        stock:30,
        description: 'Camisa KUMBA original de algodon Oversize Blanca'
    },
    {
        id:'4',
        nombre: "Pantalon Black Mom  ",
        precio: 16000,
        categoria: 'Pantalones',
        stock:30,
        description: 'Pantalon negro Kumba estilo MOM rasgado',
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/994/528/products/dsc_0041-11-9b69938d88af6b4dea16698942667549-640-0.webp'
    }
]

export const getProducts =() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },200)
    })
}

export const getProductById =(productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },200)
    })
}

export const getProductByCategory =(categoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.categoria === categoria))
        },200)
    })
}

