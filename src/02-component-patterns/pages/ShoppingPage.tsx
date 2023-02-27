import { useState } from "react"
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products"
import { Product, ProductInCart } from "../interfaces/interfaces"
import '../styles/costum-styles.css'

const product = products[0]

export const ShoppingPages = ()=>
{
  

    return(
        <div>
            <h1>Shopping Store</h1>
            <hr />
                <ProductCard 
                    key={product.id}
                    product={product}
                    className="bg-dark text-white"
                    initialValues={{
                    count:4,
                    maxCount:10
                }}
                >
                    {
                        ({
                            reset,
                            increaseBy,
                            count
                        })=>(
                            <>
                                <ProductImage className='costum-image'/>
                                <ProductTitle className='text-white text-bold' title="Hola Mundo"/>
                                <ProductButtons className='costum-buttons'/>
                                <button onClick={reset}>Reset</button>
                                <button onClick={()=>increaseBy(-2)}>-2</button>
                                <button onClick={()=>increaseBy(+2)}>+2</button>
                                <span>{count}</span>
                            </>
                        )
                    }
                
            </ProductCard>
        </div>
    )
}