import axios from 'axios';
import { useState, useEffect } from 'react'


function Products(props) {


    const [products, setProducts] = useState([])

    useEffect(function () {
        axios({
            url: "https://sephora.p.rapidapi.com/products/list",
            params: { categoryId: props.productType, pageSize: '32', currentPage: '1' },
            headers: {
                'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
                'X-RapidAPI-Key': 'b72129449cmsh62e540ac939d145p15ac01jsnb147a4608c58'
            }


        }).then((res) => {
            setProducts(res.data.products)
            console.log(res.data.products)
        })
    }, [props.productType])



    return (

        <ul className="items">
            {
                products.map(function (product) {
                    return (
                        <li key={product.currentSku.skuId}>
                            < img
                                src={product.image450}
                                alt={product.title} />
                            <p className="boldFont brand">{product.brandName}</p>
                            <p>{product.displayName}</p>
                            <p className="boldFont"> {product.currentSku.listPrice}</p>
                            <button>Add to Cart</button>




                        </li>
                    )
                })
            }
        </ul>

    )
}

export default Products